import { _DATABASE } from "../../../database";

type TFindAll = () => unknown[];

export const findAll: TFindAll = () => {
    const query = "SELECT * FROM products"

    return _DATABASE.prepare(query).all();
}