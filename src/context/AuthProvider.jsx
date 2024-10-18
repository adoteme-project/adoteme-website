import { createContext, useEffect, useState } from "react";
import { login as loginService } from "@/services/authAPI"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserData } from "@/services/adotanteAPI";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        idUser: null,
        token: localStorage.getItem("token") || null,
        userData: JSON.parse(localStorage.getItem("userData")) || null, // Tem que mudar
    });

    const navigate = useNavigate();

    const retriveUserData = async (id) => {
        try {
            const response = await getUserData(id);
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
            const { token, idUser } = response.data;

            setAuth((prevAuth) => ({
                ...prevAuth,
                idUser,
                token,
            }));

            toast.success("Login realizado com sucesso!");

            localStorage.setItem("token", token);

            await retriveUserData(idUser);

            navigate("/");
        } catch (error) {
            toast.error("Erro ao realizar o login! Por favor, verifique suas credenciais.");
            throw error.response.data || "Erro desconhecido";
        }
    }

    const logout = () => {
        setAuth({ idUser: null, token: null });
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        navigate("/login");
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token && !auth.token || auth.userData) {
            setAuth((prev) => ({ ...prev, token }));
            localStorage.setItem("userData", JSON.stringify(auth.userData)); // Estudando outra solução
        }
    }, [auth.token, auth.userData]);


    return (
        <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;