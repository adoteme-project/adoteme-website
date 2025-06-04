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

export function getPetsPerdidosOng(ongId) {
    return axiosAuthenticatedOng.get(`/animais-perdidos/animal-perdido-achados-perdidos-por-ong-tabela/${ongId}`);
}

export function getPetDetalhesOng(idPet) {
    return axiosAuthenticatedOng.get(`/animais/animal-com-lista-aplicacao/${idPet}`)
}

export function getDadosAdotanteRequisicao(idAdotante) {
    return axiosAuthenticatedOng.get(`/adotantes/form-adotante/${idAdotante}`);
}

export function deletePetOng(idPet) {
    return axiosAuthenticatedOng.delete(`/animais/${idPet}`);
}

export function deletePetPerdidoOng(idPetPerdido) {
    return axiosAuthenticatedOng.delete(`/animais-perdidos/${idPetPerdido}`);
}

export function getSidebarInfoOng(idOng) {
    return axiosAuthenticatedOng.get(`/ongs/nome-e-imagem-ong/${idOng}`);
}

export function listarAplicacoesDashboard(ongId, anoSelecionado) {
    return axiosAuthenticatedOng.get(`/adocoes/dados-adocao-dashboard/${ongId}`, 
        { params: anoSelecionado }
    );
}