CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    list_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    price REAL NOT NULL,
    expiration_date DATE,
    FOREIGN KEY (list_id) REFERENCES lists(id)
);
