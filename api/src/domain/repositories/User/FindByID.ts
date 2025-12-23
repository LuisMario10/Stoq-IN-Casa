import { _DATABASE } from "../../../database"

type TFindByIDUser = (id: number) => unknown;

export const findByID: TFindByIDUser = (id) => {
    try {
        const query = "SELECT * FROM users WHERE id = ?";

        return _DATABASE.prepare(query).get(id);

    } catch {
        throw new Error("Erro ao coletar registro de usuarios pelo ID")
    }
}   