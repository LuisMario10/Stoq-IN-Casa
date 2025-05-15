import { _PRODUCT_DATABASE } from "../database/Product.DataBase.js";

let date = new Date();

const currentDate = () => `${date.getDay}/${date.getMonth}/${date.getFullYear}`;

export default function productModel(nameProduct, price, expirationDate) {
    return {
        id: _PRODUCT_DATABASE.length + 1,
        nameProduct: nameProduct,
        price: price,
        createdAt: currentDate,
        expirationDate: expirationDate
    };
}