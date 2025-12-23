import { IUser } from "../../models/User";
import { _DATABASE } from "../../../database";

type TUpdateByIDUser = (id: number, datas: Partial<IUser>) => void;

export const updateByID: TUpdateByIDUser = (id, datas) => {
    try {
        const query = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";

        _DATABASE.prepare(query).run(datas.name, datas.email, datas.password, id);
        
    } catch {
        throw new Error("Erro ao atualizar dados do usuario")
    }
}