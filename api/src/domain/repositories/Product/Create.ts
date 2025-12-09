import { _DATABASE } from "../../../database";
import { IProduct } from "../../models/Product";

type TCreate = (datas: Partial<IProduct>) => number | bigint;

export const create: TCreate = (datas) => {

    const query = "INSERT INTO products(name, quantity, price, expiration_date) VALUES (?, ?, ?, ?)"

    const result = _DATABASE.prepare(query).run(datas.name, datas.quantity, datas.priceInCents, datas.expirationDate);

    return result.lastInsertRowid;

}