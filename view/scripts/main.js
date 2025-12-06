const listContainer = document.querySelector(".list-container");


const DATABASE = [
    {
        id: 1,
        listName: "Lista 1",
        itens: [
            { id: 1, productName: "Arroz", quantity: 12, priceInCents: 1500, expirationDate: "22/12/2025" },
            { id: 2, productName: "Feijão", quantity: 5, priceInCents: 1000, expirationDate: "04/04/2026" },
            { id: 3, productName: "Frango", quantity: 9, priceInCents: 1210, expirationDate: "02/01/2026" }
        ]
    },
    {
        id: 2,
        listName: "Lista 2",
        itens: [
            { id: 1, productName: "Uva", quantity: 7, priceInCents: 1200, expirationDate: "07/02/2026" },
            { id: 2, productName: "Maçã", quantity: 20, priceInCents: 1450, expirationDate: "09/02/2026" },
            { id: 3, productName: "Laranja", quantity: 14, priceInCents: 120, expirationDate: "22/09/2026" }
        ]
    }
    
];


// Implementação provisoria
const priceConverter = (priceInCents) => priceInCents / 100;

const createItemListComponent = (props) => {

    const listComponent = document.createElement('div');

    const nameElement = document.createElement('h2');

    const quantityElement = document.createElement('span');

    const priceElement = document.createElement('span');

    const expirationDateElement = document.createElement('p');


    nameElement.textContent = props.productName;

    quantityElement.textContent = props.quantity;

    priceElement.textContent = priceConverter(props.priceInCents);

    expirationDateElement.textContent = props.expirationDate;

    listComponent.appendChild(nameElement);
    listComponent.appendChild(quantityElement);
    listComponent.appendChild(priceElement);
    listComponent.appendChild(expirationDateElement);

    listContainer.appendChild(listComponent);
}
