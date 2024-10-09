import { axiosAuth, axiosForm } from "./configs/axiosConfig";

export function cadastrarAdotante(formData) {
    return axiosForm.post("/adotantes/cadastrar", formData);
}

const login = (context, data) => {
    return axiosAuth.post(`/login/${context}`, data);
}

export { login }