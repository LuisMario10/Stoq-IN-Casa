import { _PRODUCT_DATABASE } from "../../databases/Product.DataBase.js";

export const validateName = (request, response) => {
    if(!request.body.nameProduct) {

            response.status(422).json({ 
            statusCode: 422, 
            msg: "Nome do produto não pode ser vazio!!!" 
        });
    }   

    _PRODUCT_DATABASE.find(e => {
        if(e.nameProduct === request.body.nameProduct) {
            return response.status(422).json({ 
                    statusCode: 422, 
                    msg: "Produto ja existe na base de dados" 
                })
        }
    });
}

export const validateIdentity = (request, response) => {

    if(!request.body.id) response.status(422).json({ statusCode: 422, msg: "Id vazio!!!" });

    if(request.body.id < 0) response.status(422).json({ statusCode: 422, msg: "O 'id' não pode ser negativo" });
        
}


export const validateQuantity = (request, response) => {

    if(!request.body.quantity) response.status(422).json({ statusCode: 422, msg: "O campo de 'quantidade' não pode estar vazio!!!" });

    if(request.body.quantity < 0) response.status(422).json({ statusCode: 422, msg: "Campo de 'quantidade' não pode ter numeros abaixo de zero!!!" });
}

export const validateExpirationDate = (request, response) => {
    
    if(!request.body.expirationDate) response.status(422).json({ statusCode: 422, msg: "O campo 'Data de Validade' não pode estar" });
}