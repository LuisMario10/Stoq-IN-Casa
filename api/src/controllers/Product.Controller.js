import { create, deleteProduct, findAll, findById, updateName, updateQuantity } from "../domain/Product.Repository.js"
import { validateExpirationDate, validateIdentity, validateName, validateQuantity } from "../shared/validators/Product.Validators.js"
import productModel from "../domain/Product.Model.js";

export const post = (request, response) => {
    validateName(request, response);

    const { nameProduct, price, expirationDate } = request.body;


    try {

        let product = productModel(nameProduct, price, expirationDate);

        create(product);

        response.status(201).json({ msg: "Produto incerido na base de dados com sucesso!!" });
    } catch {

        response.status(500).json({ msg: "Server internal error" });
    }
}

export const getAll = (request, response) => {

    try {

        response.status(200).json({ statusCode: 200, msg: "Dados de todos os produtos foram coletados com sucesso!!2", result: findAll() });
    } catch {
        response.status(500).json({ statusCode: 500, msg: "Server internal error" });
    }
}

export const getByID = (request, response) => {
    validateIdentity(request, response);

    try {
        response.status(200).json({ msg: `Produto de id: ${request.body.id} foi resgatado com sucesso!!!`, result: findById(request.body.id) });
    } catch {
        response.status(500).json({ statusCode: 500, msg: "Server Internal Error" });
    }
}

export const putName = (request, response) => {
    validateIdentity(request, response);

    validateName(request, response);

    try {
        updateName(request.body.id, request.body.name);
        response.status(201).json({ statusCode: 201, msg: "Nome de Produto atualizado com sucesso!!!" });
    } catch {
        request.status(500).json({ statusCode: 500, msg: "Server Internal Error" });
    }
}

export const putQuantity = (request, response) => {

    validateIdentity(request, response);

    validateQuantity(request, response);

    try {
        updateQuantity(request.body.id, request.body.quantity);
        response.status(201).json({ statusCode: 201, msg: "Nome de Produto atualizado com sucesso!!!" });
    } catch {
        request.status(500).json({ statusCode: 500, msg: "Server Internal Error" });
    }
}
export const putExpirationDate = (request, response) => {
    validateIdentity(request, response);

    validateExpirationDate(request, response);
    

    try {
        updateExpirationDate(request.body.id, request.body.expirationDate);
        response.status(201).json({ statusCode: 201, msg: "Data de Validade foi alterada com sucesso" });
    } catch {
        response.status(500).json({ statusCode: 500, msg: "Server Internal Error" });
    }
}

export const deleteProd = (request, response) => {
    validateIdentity(request, response);

    try {
        deleteProduct(request.body.id);
        response.status(201).json({ statusCode: 201, msg: "Produto deletado!!!" });
    } catch {
        response.status(500).json({ statusCode: 500, msg: "Server Internal Error" });
    }
}