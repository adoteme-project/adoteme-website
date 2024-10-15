import AuthContext from "@/context/AuthProvider";
import axios from "axios";
import { useContext } from "react";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const axiosForm = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  }
});

const viaCep = axios.create({
  baseURL: "https://viacep.com.br/ws/",
  headers: {
    "Content-Type": "application/json"
  }
});

const axiosAuth = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});

axiosAuth.interceptors.request.use(
  (config) => {
      const token = localStorage.getItem("token");
      if (token) {
          config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
  },
  (error) => Promise.reject(error)
);

axiosAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const { setAuth, logout } = useContext(AuthContext);

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axiosAuth.post("/login/refresh", {
          refreshToken,
        });

        const { token } = response.data;
        localStorage.setItem("token", token);

        setAuth((prevAuth) => ({
          ...prevAuth,
          token,
        }));

        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axiosAuth(originalRequest);

      } catch (refreshError) {
        console.error("Erro ao tentar renovar o token", refreshError);
        logout(); // Fazer logout se o refresh token falhar
      }
    }

    return Promise.reject(error);
  }
);


export { axiosAuth, viaCep, api, axiosForm};
