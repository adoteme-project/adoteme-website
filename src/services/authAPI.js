import { auth, axiosForm } from "./configs/axiosConfig";

export function cadastrarAdotante(formData) {
    return axiosForm.post("/adotantes/cadastrar", formData);
}


auth.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

auth.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem("refreshToken");
                const response = await auth.post("/api/refresh-token", {
                    refreshToken,
                });

                const { token } = response.data;
                localStorage.setItem("token", token);

                originalRequest.headers.Authorization = `Bearer ${token}`;

                return auth(originalRequest);
            } catch (refreshError) {
                console.error("Refresh token request failed", refreshError);
            }
        }

        return Promise.reject(error);
    }
);