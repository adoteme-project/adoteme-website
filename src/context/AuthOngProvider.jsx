import { createContext, useEffect, useState } from "react";
import { login as loginService } from "@/services/authAPI";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosAuth, axiosAuthenticatedOng } from "@/services/configs/axiosConfig";
import { getOngUserData } from "@/services/onguserAPI";

const OngAuthContext = createContext();

export const OngAuthProvider = ({ children }) => {
    const [authOng, setAuthOng] = useState({
        token: localStorage.getItem("ongToken") || null,
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
                const { token, role } = response.data;

                setAuthOng((prevAuth) => ({
                    ...prevAuth,
                    token,
                    role
                }));

                toast.success("Login realizado com sucesso!");
                localStorage.setItem("ongToken", token);
                localStorage.setItem("role", role);

                await retriveUserData("ongusers");

                navigate("/ong/dashboard")
            }

        } catch (error) {
            const errorMessage = error.response?.data.message || "Erro desconhecido";
            console.log(errorMessage);

            toast.error("Erro ao realizar o login! Verifique suas credenciais.");
        }
    };


    const retriveUserData = async (contextType) => {
        try {
            const response = await getOngUserData(contextType);

            const { role } = response.data; 


            setAuthOng((prevAuth) => ({
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
        setAuthOng({ token: null, userData: null });
        localStorage.removeItem("ongToken");
        localStorage.removeItem("role");
        navigate("/login");
    };

    const refreshToken = async () => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");

            if (!refreshToken) {
                throw new Error("No refresh token available");
            }

            const { data } = await axiosAuthenticatedOng.post("/login/refresh", { refreshToken });
            const { accessToken, refreshToken: newRefreshToken } = data;


            localStorage.setItem("token", accessToken);
            localStorage.setItem("refreshToken", newRefreshToken);

            setAuthOng((prevAuth) => ({
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

    axiosAuthenticatedOng.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

            if (error.response.status === 401 && authOng.token && !originalRequest._retry) {
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
        const token = localStorage.getItem("ongToken");

        if (token && !authOng.token) {
            setAuthOng((prev) => ({ ...prev, token }));
        }

        if (authOng.token && !authOng.userData) {
            retriveUserData("ongusers");
        }
    }, [authOng.token, authOng.userData]);

    return (
        <OngAuthContext.Provider value={{ authOng, setAuthOng, login, logout }}>
            {children}
        </OngAuthContext.Provider>
    );
};

export default OngAuthContext;