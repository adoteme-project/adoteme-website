import { axiosAuth } from "./configs/axiosConfig";

export const getUserData = () => {
    return axiosAuth.get(`/adotantes/me`);
};

export const getUserById = (id) => {
    return axiosAuth.get(`/adotantes/${id}`);
};
