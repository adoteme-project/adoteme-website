import { axiosAuth } from "./configs/axiosConfig"

export const getUserData = (id) => {
    return axiosAuth.get(`/adotantes/${id}`);
}