import { Request, Response } from "express";
import { ProductRepository } from "../../domain/repositories";
import { StatusCodes } from "http-status-codes";
import { ProductControllerValidator } from "../Validators";
import { IProduct } from "../../domain/models/Product";

// Função provisoria antes de implementar a real função get price
const getPrice = () => 12000

export const post = (request: Request, response: Response) => {
    const { name, quantity, expirationDate } = ProductControllerValidator.body.parse(request.body);

    const product: Partial<IProduct> = {
        name: name,
        quantity: quantity,
        priceInCents: getPrice() / 100,
        expirationDate: expirationDate
    }

    try {
        return response.status(StatusCodes.CREATED).json({
            statusCodes: StatusCodes.CREATED,
            msg: "Produto criado com sucesso",
            data: ProductRepository.create(product)
        })
    } catch {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            statusCodes: StatusCodes.INTERNAL_SERVER_ERROR,
            msg: "Erro interno do Servidor"
        })
    }
}