import { _PRODUCT_DATABASE } from "../../databases/Product.DataBase.js"

export const create = (datas) => {
    _PRODUCT_DATABASE.push(datas);
}

export const findAll = () => {
    return _PRODUCT_DATABASE
}

export const findById = (id) => {
    return _PRODUCT_DATABASE[id - 1]
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