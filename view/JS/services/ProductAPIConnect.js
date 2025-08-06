import axios from 'axios'

const _ROUTE = `http://localhost:2345/stoq/prod/`


const createProduct = async (nameProduct, quantity, expirationDate) => {

    const _URL = _ROUTE + "p/";

    console.log(_URL)

    try {   
        return await axios.post(_URL, {
            nameProduct: nameProduct,
            quantity: quantity,
            expirationDate: expirationDate
        });

    } catch(error) {
        return error;
    }
}

const getAllProducts = async () => {

    const _URL = _ROUTE + "g/all";

    console.log(_URL)

    try {
        return await axios.get(_URL)
    } catch(error) {
        return error
    }
}


const getProductByID = async id => {

    const _URL = _ROUTE + `g/bid/${id}`

    console.log(_URL)

    try {
        return await axios.get(_URL);
    } catch(error) {
        return error;
    }
}


const updateNameProduct = async (id, newnNameProduct) => {

    const _URL = _ROUTE + `u/name/${id}`;

    console.log(_URL)

    try {
        return await axios.put(_URL, {
            nameProduct: newnNameProduct
        });
    } catch(error) {
        return error;
    }
}

const updateProductQuantity = async (id, newQuantity) => {

    const _URL = _ROUTE + `u/quant/${id}`;

    console.log(_URL)

    try {
        return await axios.put(_URL, {
            quantity: newQuantity
        });
    } catch(error) {
        return error;
    }
}

const updateProductExpirationDate = async (id, newExpirationDate) => {

    const _URL = _ROUTE + `u/expdate/${id}`;

    console.log(_URL);

    try {
        return await axios.put(_URL, {
            expirationDate: newExpirationDate
        });
    } catch(error) {
        return error;
    }
}


