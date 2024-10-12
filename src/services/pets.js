import { api } from "./configs/axiosConfig"

export function getPetPerdido() {

    return api.get("/animais-perdidos")

}