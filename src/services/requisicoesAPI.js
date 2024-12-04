import { axiosAuthenticated } from "./configs/axiosConfig"


export const getRequisicoes = (idAdotante) => {
    return axiosAuthenticated.get(`/requisicoes/${idAdotante}`);
}
