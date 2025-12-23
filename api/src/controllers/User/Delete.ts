import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { UserControllerValidators } from "../Validators"
import { UserRepository } from "../../domain/repositories";
import { TParamsProps } from "../@types";

export const deleteController = (request: Request<TParamsProps>, response: Response) => {
    request.params.id = Number(request.params.id);

    const { id } = UserControllerValidators.params.parse(request.params.id);

    try {
        UserRepository.deleteByID(id);

        return response.status(StatusCodes.OK).json({
            statusCodes: StatusCodes.OK,
            msg: `Dados do registro do usuario de ID ${id} foram deletados`,
        })
    } catch {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            statusCodes: StatusCodes.INTERNAL_SERVER_ERROR,
            msg: "Erro interno do servidor"
        })
    }
}