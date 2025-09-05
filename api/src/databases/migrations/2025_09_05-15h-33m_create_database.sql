-- Tabela de usuários
CREATE TABLE users (
    id TEXT PRIMARY KEY,                       
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL CHECK (LENGTH(password) = 8),
    createdAt DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATE DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de produtos
CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    priceAverange REAL,
    quantity INTEGER,
    expirationDate DATE
);

-- Tabela de listas de compras
CREATE TABLE shopping_list (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    userID TEXT NOT NULL,
    createdAt DATE NOT NULL,
    FOREIGN KEY (userID) REFERENCES users(id) ON DELETE CASCADE
);

-- Tabela de itens em cada lista de compra (ligação N:N entre listas e produtos)
CREATE TABLE shopping_list_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    listID INTEGER NOT NULL,
    productID INTEGER NOT NULL,
    quantity INTEGER DEFAULT 1,
    FOREIGN KEY (listID) REFERENCES shopping_list_items(id) ON DELETE CASCADE,
    FOREIGN KEY (productID) REFERENCES products(id) ON DELETE CASCADE
);
