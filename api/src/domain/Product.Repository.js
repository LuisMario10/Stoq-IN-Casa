import { _PRODUCT_DATABASE } from "../database/Product.DataBase"

export const create = (datas) => {
    _PRODUCT_DATABASE.push(datas);
}

export const findAll = () => {
    return _PRODUCT_DATABASE
}

export const findById = (id) => {
    return {
        nameProduct: _PRODUCT_DATABASE[id - 1].nameProduct,
        price: _PRODUCT_DATABASE[id - 1].price,
        createdAt: _PRODUCT_DATABASE[id - 1].createdAt
    }
}

export const updateName = (id, data) => {
    _PRODUCT_DATABASE[id - 1].name = data.name;
}

export const updateQuantity = (id, data) => {
    _PRODUCT_DATABASE[id - 1].quantity = data.quantity;
}

export const updateExpirationDate = (id, datas) => {
    _PRODUCT_DATABASE[id - 1].expirationDate = datas.expirationDate;
}

export const deleteProduct = (id) => {
    _PRODUCT_DATABASE = _PRODUCT_DATABASE.find(e => e.id !== id);
}