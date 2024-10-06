import { axiosAuth, axiosForm } from "./configs/axiosConfig";

export function cadastrarAdotante(formData) {
    return axiosForm.post("/adotantes/cadastrar", formData);
}

export function login(context, data) {
    return axiosAuth.post(`/login/${context}`, data);
}

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

            try {
                const refreshToken = localStorage.getItem("refreshToken");
                const response = await axiosAuth.post("/api/refresh-token", {
                    refreshToken,
                });

                const { token } = response.data;
                localStorage.setItem("token", token);

                originalRequest.headers.Authorization = `Bearer ${token}`;

                return axiosAuth(originalRequest);
            } catch (refreshError) {
                console.error("Refresh token request failed", refreshError);
            }
        }

        return Promise.reject(error);
    }
);