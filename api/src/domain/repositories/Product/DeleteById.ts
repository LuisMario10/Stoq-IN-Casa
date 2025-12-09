import { _DATABASE } from "../../../database";

type TDeleteByID = (id: number) => void;

export const deleteByID: TDeleteByID = (id) => {
    const query = "DELETE products WHERE id = ?";

    _DATABASE.prepare(query).run(id);
}