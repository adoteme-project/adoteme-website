import { axiosAuthenticated } from "./configs/axiosConfig";

export function getPetsOng(id) {
    return axiosAuthenticated.get(`/ongs/listagem-animais-ong/${id}`);
}