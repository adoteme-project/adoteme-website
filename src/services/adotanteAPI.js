import { axiosAuthenticated } from "./configs/axiosConfig"

export const getUserData = (context) => {
    return axiosAuthenticated.get(`/${context}/me`);
}