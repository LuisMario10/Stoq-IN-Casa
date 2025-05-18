import { _PRODUCT_DATABASE } from "../../databases/Product.DataBase.js";

let date = new Date();

let formatDay= (day) => {
    if(day < 10) return `0${day}`;
    else return day
}

let formatMouth = (month) => {
    if(month < 10) return `0${month}`;
    else return month
}
    

export default function productModel(nameProduct, quantity, expirationDate) {
    return {
        id: _PRODUCT_DATABASE.length + 1,
        nameProduct: nameProduct,
        quantity: quantity,
        createdAt: `${formatDay(date.getDay())}/${formatMouth(date.getMonth())}/${date.getFullYear}`,
        expirationDate: expirationDate
    };
}