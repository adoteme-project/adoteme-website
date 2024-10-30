import { axiosAuthenticatedOng, axiosDownload } from "./configs/axiosConfig"

export const exportacaoPets = (id) => {
    return axiosDownload.get(`/animais/exportar/${id}`);
}

export const getOngUserData = (context) => {
    return axiosAuthenticatedOng.get(`/${context}/me`);
}