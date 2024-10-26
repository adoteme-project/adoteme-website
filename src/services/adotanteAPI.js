import { axiosAuth } from "./configs/axiosConfig"

export const getUserData = () => {
    return axiosAuth.get(`/adotantes/me`);
}