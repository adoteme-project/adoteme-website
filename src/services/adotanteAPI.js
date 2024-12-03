import { axiosAuthenticated, axiosAuthenticatedOngMultiPart } from "./configs/axiosConfig"

export const getUserData = (context) => {
    return axiosAuthenticated.get(`/${context}/me`);
}

export const getUserById = (id) => {
    return axiosAuthenticated.get(`/adotantes/dados-foto-adotante/${id}`, {
    })
}

export const getUserAdotanteFormulario = (id) => {
    return axiosAuthenticated.get(`/adotantes/formulario-adotante/${id}`)
}

export const postRequisicaoAdocao = (idAdotante,idAnimal) => {
    const data = { 
        idAdotante,
        idAnimal
    };
    return axiosAuthenticated.post(`/requisicoes`, data);
}

export const postFavoritarAnimal = (idAdotante,idAnimal) => {
    return axiosAuthenticated.post(`/adotantes/favoritar-animal${idAdotante}/${idAnimal}`);
}

export const deleteDesfavoritarAnimal = (idAdotante, idAnimal) => {
    return axiosAuthenticated.delete(`/adotantes/desfavoritar-animal/${idAdotante}/${idAnimal}`)
}

export const getRequisicoesByAdotante = (idAdotante) => {
    return axiosAuthenticated.get(`/adotantes/lista-requisicao-adotante/${idAdotante}`)
}

export const getAnimalFavoritoByAdotante = (idAdotante) => {
    return axiosAuthenticated.get(`/adotantes/animais-favoritos-usuario/${idAdotante}`)
}

export const putAdotante = (idAdotante, formData) => {
    return axiosAuthenticatedOngMultiPart.put(`/adotantes/${idAdotante}`, formData);
}

export const putAdotanteFormulario = (id,data) => {
    return axiosAuthenticated.put(`/adotantes/atualizacao-formulario/${id}/`,data)
}

