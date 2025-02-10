import { api } from "./configs/axiosConfig"

export function getPetsPerdido() {
    return api.get("/animais-perdidos/animal-perdido-achados-perdidos/")
}

export function getPetPerdidoPorId(idAnimal) {
    return api.get(`/animais-perdidos/animal-perdido-achados-perdidos-card/${idAnimal}`)
}

export function getTodosAnimaisComPersonalidade() {
    return api.get(`/animais/todos-animais-com-personalidade/`);
}