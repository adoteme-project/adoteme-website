import { createContext, useEffect, useState } from "react";
import { login as loginService } from "@/services/authAPI"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        email: null,
        token: localStorage.getItem("token") || null,
    });

    const navigate = useNavigate();

    const login = async (context, data) => {
        try {
            const response = await loginService(context, data);
            const { token } = response.data;

            setAuth((prevAuth) => ({
                ...prevAuth,
                email: data.email,
                token,
            }));

            toast.promise(response, {
                pending: "Aguarde um momento...",
                success: "Login realizado com sucesso!",
                error: "Erro ao realizar o login! Por favor, tente novamente.",
            })

            localStorage.setItem("token", token);
            navigate("/");
        } catch (error) {
            console.log("Erro ao fazer login: ", error);
        }
    }

    const logout = () => {
        setAuth({ email: null, token: null });
        localStorage.removeItem("token");
        navigate("/login");
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token && !auth.token) {
            setAuth((prev) => ({ ...prev, token }));
        }
    }, [auth.token]);

    return (
        <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;