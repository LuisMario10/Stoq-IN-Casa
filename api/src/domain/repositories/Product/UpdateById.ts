import { _DATABASE } from "../../../database";
import { IProduct } from "../../models/Product";

type TUpdateByID = (id: number, datas: Partial<IProduct>) => void;

export const updateByID: TUpdateByID = (id, datas) => {
    const query = "UPDATE products SET name = ?, quantity = ?, price = ?, expiration_date = ? WHERE id = ?";

    _DATABASE.prepare(query).run(datas.name, datas.quantity, datas.priceInCents, datas.expirationDate, id);
}