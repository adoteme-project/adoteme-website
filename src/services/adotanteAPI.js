import { axiosAuth } from "./configs/axiosConfig"

export const getUserData = (context) => {
    return axiosAuth.get(`/${context}/me`);
}