import Database from 'better-sqlite3'

const _DATABASE = new Database('stoqincasa.db');

export const query = (query, values = "", mensage, options) => {

    if(!query) return Error("Query não pode estar vazia!!!");

    options = options.toLowerCase();

    try {
        if(options === 'get_all') {
            return _DATABASE.prepare(query).all();
        } else {
            return _DATABASE.prepare(query).run(values);
        }
    } 
    catch(error) {
        console.log(error)
        return Error(mensage);
    } 
    finally {
        _DATABASE.close();
    }
}

_DATABASE.prepare('CREATE TABLE products (id INTEGER PRIMARY KEY, name TEXT, quantity INTEGER, averangePrice FLOAT, expirationDate TEXT, createdAt TEXT, updatedAt TEXT);').run();

const q = query("SELECT * FROM products", "", "Erro ao tentar visualizar todos os registros de produto", "get_all");

console.log(q);