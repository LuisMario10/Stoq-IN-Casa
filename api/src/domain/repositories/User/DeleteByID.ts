import { _DATABASE } from "../../../database";

type TDeleteByIDUser = (id: number) => void;

export const deleteByID: TDeleteByIDUser = (id) => {
    try {
        const query = "DELETE user WHERE id = ?";

        _DATABASE.prepare(query).run(id);
    } catch {
        throw new Error("Erro ao deletar registro de usuario");
    }
}