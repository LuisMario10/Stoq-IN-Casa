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

_DATABASE.prepare("CREATE TABLE shopping_list_items(id INTEGER PRIMARY KEY AUTOINCREMENT, listID INTEGER NOT NULL, productID INTEGER NOT NULL, quantity INTEGER DEFAULT 1, FOREIGN KEY (listID) REFERENCES shopping_list_items(id) ON DELETE CASCADE, FOREIGN KEY (productID) REFERENCES products(id) ON DELETE CASCADE);").run();
