import { api } from "./configs/axiosConfig"

export function getPetsPerdido() {
    return api.get("/animais-perdidos")
}

export function getPetPerdidoPorId(ongId) {
    return api.get(`/animais-perdidos/animal-perdido-achados-perdidos/${ongId}`)
}