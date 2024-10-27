import { axiosDownload } from "./configs/axiosConfig"

export const exportacaoPets = (id) => {
    return axiosDownload.get(`/animais/exportar/${id}`);
}