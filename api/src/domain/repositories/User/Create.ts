import { _DATABASE } from "../../../database";
import { IUser } from "../../models/User"; 

type TCreateUser = (datas: Partial<IUser>) => number | bigint;

export const create: TCreateUser = (datas) => {
    try {

        const query = "INSERT INTO users(name, email, password) VALUES (?, ?, ?)";

        const result = _DATABASE.prepare(query).run(datas.name, datas.email, datas.password);

        return result.lastInsertRowid;
        
    } catch {
        throw new Error("Erro ao cadastrar novo usuario");
    }
}