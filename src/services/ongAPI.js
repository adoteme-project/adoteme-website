import { axiosAuthenticated, axiosAuthenticatedOngMultiPart } from "./configs/axiosConfig";

export function getPetsOng(id) {
    return axiosAuthenticated.get(`/ongs/listagem-animais-ong/${id}`);
}

export function cadastroPetAbrigo(especie, formData) {
    return axiosAuthenticatedOngMultiPart.post(`/animais/${especie}`, formData);
}