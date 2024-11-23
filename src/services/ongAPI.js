import { axiosAuthenticated, axiosAuthenticatedOng, axiosAuthenticatedOngMultiPart } from "./configs/axiosConfig";

export function getPetsOng(id) {
    return axiosAuthenticated.get(`/ongs/listagem-animais-ong/${id}`);
}

export function cadastroPetAbrigo(especie, formData) {
    return axiosAuthenticatedOngMultiPart.post(`/animais/${especie}`, formData);
}

export function cadastroPetResgatado(especie, formData) {
    return axiosAuthenticatedOngMultiPart.post(`/animais-perdidos/${especie}`, formData);
}

export function listarAplicacoesOng(ongId) {
    return axiosAuthenticatedOng.get(`/animais/todos-animais-pela-aplicacao-por-ong/${ongId}`);
}