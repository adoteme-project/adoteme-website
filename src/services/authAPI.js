import { axiosAuth, axiosForm } from "./configs/axiosConfig";

export function cadastrarAdotante(formData) {
    debugger
    return axiosForm.post("/adotantes/cadastrar", formData);
}

const login = (context, data) => {
    return axiosAuth.post(`/login/${context}`, data);
}

export function loginOtp(email, otp) {
    return axiosAuth.post(`/login/adotante/validar-otp`, null, {
        params: { email, otp }
    });
}

export { login }