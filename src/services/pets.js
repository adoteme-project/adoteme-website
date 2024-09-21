import client from "./configs/axiosConfig"

export function getPetPerdido() {
    return client.get("/animais-perdidos")
}