import { api } from "./configs/axiosConfig";

export function getOngs() {
    return api.get(`/ongs/com-dados-bancarios/`);
}

export function getAllPets() {
    return api.get(`/animais/todos-animais-com-personalidade/`);
}

export function getPetsSiteOng() {
    return api.get(`/ongs/listagem-ongs-com-animais-dados-bancarios/`)
}