import { Request, Response } from "express";
import { UserRepository } from "../../domain/repositories";
import { StatusCodes } from "http-status-codes";
import { UserControllerValidators } from "../Validators/User/UserControllerValidator";
import { IUser } from "../../domain/models/User";

export const post = (request: Request, response: Response) => {
    const { name, email, password } = UserControllerValidators.body.parse(request.body);

    const user: Partial<IUser> = {
        name: name, 
        email: email,
        password: password
    }

    try {
        const id = UserRepository.create(user);

        return response.status(StatusCodes.CREATED).json({
            statusCodes: StatusCodes.CREATED,
            msg: "Registro de usuario criado",
            data: id
        });
    } catch {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            statusCodes: StatusCodes.INTERNAL_SERVER_ERROR,
            msg: "Erro interno no servidor"
        })
    }
}