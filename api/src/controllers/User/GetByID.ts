import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { UserControllerValidators } from "../Validators"
import { UserRepository } from "../../domain/repositories";

export const getByID = (request: Request, response: Response) => {
    const { id } = UserControllerValidators.params.parse(request.params.id);

    try {
        return response.status(StatusCodes.OK).json({
            statusCodes: StatusCodes.OK,
            msg: `Dados do registro do usuario de ID ${id} foram retornados`,
            data: UserRepository.findByID(id)
        })
    } catch {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            statusCodes: StatusCodes.INTERNAL_SERVER_ERROR,
            msg: "Erro interno do servidor"
        })
    }
}