import { createContext, useEffect, useState } from "react";
import { login as loginService } from "@/services/authAPI";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserData } from "@/services/adotanteAPI";
import { axiosAuth, axiosAuthenticated } from "@/services/configs/axiosConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: localStorage.getItem("token") || null,
        userData: null,
        role: localStorage.getItem("role") || null,
    });

    const navigate = useNavigate();

    const login = async (context, data) => {
        try {
            const response = await loginService(context, data);

            if (response.status === 401) {
                toast.error("Erro ao realizar o login! Verifique suas credenciais.");
            } else {
                const { token } = response.data;

                setAuth((prevAuth) => ({
                    ...prevAuth,
                    token,
                }));

                toast.success("Login realizado com sucesso!");
                localStorage.setItem("token", token);

                const contextType = context !== 'adotante' ? 'ongusers' : 'adotantes';
                await retriveUserData(contextType);

                if (contextType === 'ongusers') {
                    navigate("/ong/dashboard");
                } else {
                    navigate("/");
                }
            }

        } catch (error) {
            const errorMessage = error.response?.data.message || "Erro desconhecido";
            console.log(errorMessage);

            toast.error("Erro ao realizar o login! Verifique suas credenciais.");
        }
    };


    const retriveUserData = async (contextType) => {
        try {
            const response = await getUserData(contextType);

            const { role } = response.data;


            if (response.data.role != undefined) {
                localStorage.setItem("role", role);
            }

            setAuth((prevAuth) => ({
                ...prevAuth,
                userData: response.data,
                role: role,
            }));
        } catch (error) {
            console.error("Erro ao buscar informações do usuário", error);
            toast.error("Erro ao buscar informações do usuário");
        }
    };

    const logout = () => {
        setAuth({ token: null, userData: null, role: null });
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/login");
    };

    const refreshToken = async () => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");

            if (!refreshToken) {
                throw new Error("No refresh token available");
            }

            const { data } = await axiosAuthenticated.post("/login/refresh", { refreshToken });
            const { accessToken, refreshToken: newRefreshToken } = data;


            localStorage.setItem("token", accessToken);
            localStorage.setItem("refreshToken", newRefreshToken);

            setAuth((prevAuth) => ({
                ...prevAuth,
                token: accessToken,
            }));

            return accessToken;
        } catch (error) {
            console.error("Erro ao tentar renovar o token", error);
            logout();
            throw error;
        }
    };

    axiosAuthenticated.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

            if (error.response.status === 401 && auth.token && !originalRequest._retry) {
                originalRequest._retry = true;

                try {
                    const newToken = await refreshToken();
                    originalRequest.headers.Authorization = `Bearer ${newToken}`;
                    return axiosAuth(originalRequest);
                } catch (refreshError) {
                    logout();
                    toast.error("Sessão expirada. Por favor faça o login novamente");
                    return Promise.reject(refreshError);
                }
            }

            return Promise.reject(error);
        }
    );


    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");


        if (token && !auth.token) {
            setAuth((prev) => ({ ...prev, token }));
        }

        if (auth.token && !auth.userData && role) {
            const contextType = role != null ? 'ongusers' : 'adotantes';
            retriveUserData(contextType);
        }
    }, [auth.token, auth.userData]);

    return (
        <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;