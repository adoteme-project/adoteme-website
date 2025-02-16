import { axiosAuthenticatedOng, axiosDownload } from "./configs/axiosConfig"

export const exportacaoPets = (id) => {
    return axiosDownload.get(`/animais/exportar/${id}`);
}

export const getOngUserData = (context) => {
    return axiosAuthenticatedOng.get(`/${context}/me`);
}

export function iniciarAvaliacao(idOngUser, idReq) {
    return axiosAuthenticatedOng.post(`/ongusers/${idOngUser}/${idReq}`)
}

export function rejeitarRequisicao(idReq, motivo) {
    return axiosAuthenticatedOng.patch(`/requisicoes/reprovado/${idReq}`, null, {
        params: {
            motivo: motivo,
        },
    });
}

export function aprovarRequisicao(idReq) {
    return axiosAuthenticatedOng.patch(`/requisicoes/aprovado/${idReq}`);
}

export function confirmarAdocao(idReq) {
    return axiosAuthenticatedOng.patch(`/requisicoes/adotado/${idReq}`);
}

export function postCriarUsuarioOng(formUserData) {
    return axiosAuthenticatedOng.post(`/ongusers`, formUserData);
}

export function listarUsuariosOng(ongId) {
    return axiosAuthenticatedOng.get(`/ongusers/lista-ong-users-por-ong/${ongId}`);
}