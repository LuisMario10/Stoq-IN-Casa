import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UserControllerValidators } from "../Validators";
import { UserRepository } from "../../domain/repositories";
import { TQueryProps } from "../@types";

export const getAll = (request: Request<{}, {}, {}, TQueryProps>, response: Response) => {
    // Implementar um algoritimos de paginação

    const { page, limit } = UserControllerValidators.query.parse(request.query);

    try {
        return response.status(StatusCodes.OK).json({
            statusCodes: StatusCodes.OK,
            msg: "Dados de registro dos usuarios foram retornados",
            data: UserRepository.findAll()
        })

    } catch {   
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            statusCodes: StatusCodes.INTERNAL_SERVER_ERROR,
            msg: "Erro interno do servidor"
        })
    }
}