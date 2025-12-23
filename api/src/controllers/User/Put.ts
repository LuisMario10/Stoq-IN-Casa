import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { TParamsProps, TBodyProps } from "../@types";
import { UserControllerValidators } from "../Validators";
import { IUser } from "../../domain/models/User";
import { UserRepository } from "../../domain/repositories";

export const put = (request: Request<TParamsProps, {}, TBodyProps>, response: Response) => {
    request.params.id = Number(request.params.id)

    const { id } = UserControllerValidators.params.parse(request.params.id)

    const { name, email, password } = UserControllerValidators.body.parse(request.body)

    try {
        const datas: Partial<IUser> = {
            name: name,
            email: email,
            password: password
        }

        UserRepository.updateByID(id, datas)

        return response.status(StatusCodes.FORBIDDEN).json({
            statusCodes: StatusCodes.FORBIDDEN,
            msg: "Dados do registro do usuario foram alterados"
        })
    } catch {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            statusCodes: StatusCodes.INTERNAL_SERVER_ERROR,
            msg: "Erro interno do Servidor"
        })
    }
}