import { 
    createProduct, 
    getAllProducts, 
    getProductByID, 
    updateNameProduct, 
    updateProductExpirationDate,
    updateProductQuantity,
    deleteProduct 
} from '../JS/services/ProductAPIConnect.js'

let products = getAllProducts();
let editIndex = -1;

const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');W
const addButton = document.getElementById('add-btn');
const productList = document.getElementById('products');

// Função para atualizar a lista de produtos
function updateProductList() {
    productList.innerHTML = '';
    products.forEach((product, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${product.name} - R$ ${product.price}</span>
            <button onclick="deleteProduct(${index})">Excluir</button>
            <button class="edit-button" onclick="editProduct(${index})">Editar</button>
        `;
        productList.appendChild(li);
    });
}

// Função para adicionar produto
function addProduct() {
    const name = productNameInput.value.trim();
    const price = parseFloat(productPriceInput.value.trim());

    if (name && !isNaN(price) && price > 0) {
        if (editIndex === -1) {
            products.push({ name, price });
        } else {
            products[editIndex] = { name, price };
            editIndex = -1; // Limpar o índice de edição
        }
        productNameInput.value = '';
        productPriceInput.value = '';
        updateProductList();
    } else {
        alert('Por favor, preencha corretamente os campos.');
    }
}

// Função para excluir produto
function deleteProduct(index) {
    products.splice(index, 1);
    updateProductList();
}

// Função para editar produto
function editProduct(index) {
    const product = products[index];
    productNameInput.value = product.name;
    productPriceInput.value = product.price;
    editIndex = index;
    addButton.textContent = 'Atualizar Produto';
}

// Ação do botão
addButton.addEventListener('click', addProduct);

// Inicializar a lista de produtos
updateProductList();
