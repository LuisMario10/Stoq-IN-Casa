import { _PRODUCT_DATABASE } from "../../databases/Product.DataBase.js"

export const create = (datas) => {
    _PRODUCT_DATABASE.push(datas);
}

export const findAll = () => {
    return _PRODUCT_DATABASE;
}

export const findById = (id) => {
    return _PRODUCT_DATABASE[id - 1];
}

export const updateName = (id, data) => {
    _PRODUCT_DATABASE[id - 1].nameProduct = data;
}

export const updateQuantityMore = (id, data) => {
    
    _PRODUCT_DATABASE[id - 1].quantity = data + _PRODUCT_DATABASE[id - 1].quantity;
}

export const updateQuantitySub = (id, data) => {
    _PRODUCT_DATABASE[id - 1].quantity = data.toNumber() - _PRODUCT_DATABASE[id - 1].quantity;
}

export const updateExpirationDate = (id, datas) => {
    _PRODUCT_DATABASE[id - 1].expirationDate = datas;
}

export const deleteProduct = (id) => {
    _PRODUCT_DATABASE = _PRODUCT_DATABASE.find(e => e.id !== id);
}