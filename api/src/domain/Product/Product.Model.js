import { _PRODUCT_DATABASE } from "../../databases/Product.DataBase.js";

let date = new Date();

export default function productModel(nameProduct, quantity, expirationDate) {
    return {
        id: _PRODUCT_DATABASE.length + 1,
        nameProduct: nameProduct,
        quantity: quantity,
        createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
        expirationDate: expirationDate
    };
}