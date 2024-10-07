import { axiosAuth, axiosForm } from "./configs/axiosConfig";

export function cadastrarAdotante(formData) {
    return axiosForm.post("/adotantes/cadastrar", formData);
}

export function login(context, data) {
    return axiosAuth.post(`/login/${context}`, data);
}