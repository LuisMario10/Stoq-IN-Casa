import { create, deleteProduct, findAll, findById, updateName, updateQuantity, updateExpirationDate } from "../domain/Product/Product.Repository.js"
import { validateExpirationDate, validateIdentity, validateName, validateQuantity } from "../shared/validators/Product.Validators.js"
import { _PRODUCT_DATABASE } from "../databases/Product.DataBase.js";

import productModel from "../domain/Product/Product.Model.js";

export const post = (request, response) => {
    validateName(request, response);

    const { nameProduct, quantity, expirationDate } = request.body;

    try {
        let product = productModel(nameProduct, quantity, expirationDate);

        create(product);

        response.status(201).json({ statusCode: 201, msg: "Produto incerido na base de dados com sucesso!!", productDatas: product })
    } catch {
        response.status(500).json({ statusCode: 500, msg: "Server Internal Error" });
    }
}

export const getAll = (_, response) => {
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
        updateName(request.body.id, request.body.nameProduct);
        response.status(201).json({ statusCode: 201, msg: "Nome de Produto atualizado com sucesso!!!", product: findById(request.body.id) });
    } 
    catch {
        response.status(500).json({ statusCode: 500, msg: "Server Internal Error" });
    }
}

export const putQuantity = (request, response) => {

    validateIdentity(request, response);

    validateQuantity(request, response);
    
    try {
        updateQuantity(request.body.id, request.body.quantity);
        response.status(201).json({ statusCode: 201, msg: "Quantidade do Produto atualizada com sucesso!!!" });
    }
    catch {
        response.status(500).json({ statusCode: 500, msg: "Server Internal Error" });
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
    } catch(Error) {
        response.status(500).json({ statusCode: 500, msg: "Server Internal Error" });
        console.log(Error)
    }
}