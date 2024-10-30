import { axiosAuthenticated } from "./configs/axiosConfig"

export const getUserData = (context) => {
    return axiosAuthenticated.get(`/${context}/me`);
}

export const getUserById = (id) => {
    return axiosAuthenticated.get(`/adotantes/form-adotante/${id}`, {
    })
}