import { createContext, useEffect, useState } from "react";
import { login as loginService } from "@/services/authAPI"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserData } from "@/services/adotanteAPI";
import { axiosAuth } from "@/services/configs/axiosConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: localStorage.getItem("token") || null,
        userData: null,
    });

    const navigate = useNavigate();

    const retriveUserData = async () => {
        try {
            const response = await getUserData();
            setAuth((prevAuth) => ({
                ...prevAuth,
                userData: response.data
            }));
        } catch (error) {
            console.error("Erro ao buscar informações do usuário", error);
            toast.error("Erro ao buscar informações do usuário");
        }
    }

    const login = async (context, data) => {
        try {
            const response = await loginService(context, data);
            const { token } = response.data;

            setAuth((prevAuth) => ({
                ...prevAuth,
                token,
            }));

            toast.success("Login realizado com sucesso!");

            localStorage.setItem("token", token);

            await retriveUserData();

            navigate("/");
        } catch (error) {
            toast.error("Erro ao realizar o login! Por favor, verifique suas credenciais.");
            throw error.response.data || "Erro desconhecido";
        }
    }

    const logout = () => {
        setAuth({ token: null });
        localStorage.removeItem("token");
        navigate("/login");
    };

    const refreshToken = async () => {
        try {
            const refreshToken = localStorage.getItem("token");
            const response = await axiosAuth.post("/login/refresh", {
                refreshToken,
            });

            const { token } = response.data;
            localStorage.setItem("token", token);

            setAuth((prevAuth) => ({
                ...prevAuth,
                token,
            }));

            return token;
        } catch (refreshError) {
            console.error("Erro ao tentar renovar o token", refreshError);
            logout();
            throw refreshError;
        }
    };

    axiosAuth.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;

                try {
                    const newToken = await refreshToken();
                    originalRequest.headers.Authorization = `Bearer ${newToken}`;
                    return axiosAuth(originalRequest);
                } catch (refreshError) {
                    return Promise.reject(refreshError);
                }
            }

            return Promise.reject(error);
        }
    );


    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token && !auth.token) {
            setAuth((prev) => ({ ...prev, token }));
        }

        if (auth.token && !auth.userData) {
            retriveUserData();
        }

    }, [auth.token, auth.userData]);

    return (
        <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;