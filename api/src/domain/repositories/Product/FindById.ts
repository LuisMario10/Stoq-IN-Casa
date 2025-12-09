import { _DATABASE } from "../../../database"

type TFindByID = (id: number) => unknown;

export const findByID: TFindByID = (id) => {
    
    const query = "SELECT * FROM products WHERE id = ?"

    return _DATABASE.prepare(query).get(id);
}