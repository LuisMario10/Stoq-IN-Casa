// Usar preco em centavos depois *

const LISTS = []

const listContainer = document.querySelector(".lists");

const nameProductInput = document.querySelector("#name-input");
const quantityInput = document.querySelector("#quantity-input");
const expirationDateInput = document.querySelector("#expiration-date-input")

const buttonConfirm = document.querySelector("#button-confirm")
const buttonClear = document.querySelector("#button-clear")

const listButtons = document.querySelector("#list-buttons")

if(!LISTS) listContainer.innerHTML = "<h3>Nenhum Produto na lista</h3>"


// Implementar quando houver uma conexão com a API4
const getPrice = () => "R$ 10,00"


const ProductComponent = (props) => {
    const productComponent = document.createElement("div");

    const datasContainerComponent = document.createElement("div");

    const buttonsContainerComponent = document.createElement("div");
    
    const nameProductComponent = document.createElement("h2");
    
    const quantityComponent = document.createElement("span");
    
    const priceComponent = document.createElement("p")
    
    const expirationDateComponent = document.createElement("p")

    const buttonRemoveProduct = document.createElement("button")

    const buttonEditProduct = document.createElement("button")


    productComponent.classList.add("product-component")

    datasContainerComponent.classList.add("datas-container")

    buttonsContainerComponent.classList.add("buttons-act-container")

    buttonRemoveProduct.classList.add("buttons-act")

    buttonRemoveProduct.classList.add("button-act-remove")

    buttonEditProduct.classList.add("buttons-act")

    buttonEditProduct.classList.add("button-act-edit")

    
    nameProductComponent.textContent = props.nameProduct
    
    quantityComponent.textContent = props.quantity + " Unidades";
    
    priceComponent.textContent = props.price
    
    expirationDateComponent.textContent = props.expirationDate

    buttonEditProduct.textContent = "Editar"
    
    buttonRemoveProduct.textContent = "Remover"

    datasContainerComponent.appendChild(nameProductComponent)
    datasContainerComponent.appendChild(quantityComponent)
    datasContainerComponent.appendChild(priceComponent)
    datasContainerComponent.appendChild(expirationDateComponent)

    buttonsContainerComponent.appendChild(buttonEditProduct)
    buttonsContainerComponent.appendChild(buttonRemoveProduct)

    productComponent.appendChild(datasContainerComponent)
    productComponent.appendChild(buttonsContainerComponent)
    
    listContainer.appendChild(productComponent)
}



buttonConfirm.addEventListener("click", () => {
    if(!nameProductInput.value) return window.alert("Campo de Nome do Produto não pode estar vazio!!!");

    if(nameProductInput.value.length < 2) return window.alert("Campo de Nome do Produto deve ter mais de 1 charactere!!!");

    if(!quantityInput.value) return window.alert("Campo de Nome do Produto não pode estar vazio!!!");    

    if(!expirationDateInput.value) return window.alert("Campo de Data de Validade não pode esta vazio")

    listButtons.classList.remove("hide");

    const product = {
        nameProduct: nameProductInput.value,
        quantity: quantityInput.value,
        price: getPrice(),
        expirationDate: expirationDateInput.value 
    }

    LISTS.push(product)

    ProductComponent(product)
})


buttonClear.addEventListener("click", () => {
    nameProductInput.value = "";
    quantityInput.value = "";
    expirationDateInput.value = "";
})