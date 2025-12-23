import { _DATABASE } from "../../../database";

type TFindAllUsers = () => unknown[];

export const findAll: TFindAllUsers = () => {
    try {
        const query = "SELECT * FROM users";

        return _DATABASE.prepare(query).all();

    } catch {
        throw new Error("Erro ao coletar todos os registros de usuarios");
    }
}