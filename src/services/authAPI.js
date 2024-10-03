import client from "./configs/axiosConfig";

client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

client.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem("refreshToken");
                const response = await client.post("/api/refresh-token", {
                    refreshToken,
                });

                const { token } = response.data;
                localStorage.setItem("token", token);

                originalRequest.headers.Authorization = `Bearer ${token}`;

                return client(originalRequest);
            } catch (refreshError) {
                console.error("Refresh token request failed", refreshError);
            }
        }

        return Promise.reject(error);
    }
);