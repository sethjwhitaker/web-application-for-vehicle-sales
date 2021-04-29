import db from './db';

class Model {
    /*
        config: {
            tableName:
        }
    */
    constructor(config) {
        this.tableName = config.tableName;
        this.db = db;
    }
    
    create(newItem, result) {
        const query = `INSERT INTO ?? SET ?`;
        const values = [this.tableName, newItem];

        this.db.query(query, values, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            } else {
                console.log("created item: ", { id: res.insertId, ...newItem });
                result(null, { id: res.insertId, ...newItem });
            }
        });
    }

    read(itemId, result) {
        const query = `SELECT * FROM ?? WHERE id = ?`;
        const values = [this.tableName, itemId];
        this.db.query(query, values, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
        
            if (res.length) {
                console.log("found item: ", res[0]);
                result(null, res[0]);
                return;
            }
        
            // not found item with the id
            result({ kind: "not_found" }, null);
        });
    }
    
    readAll(result) {
        const query = `SELECT * FROM ??`;
        const value = this.tableName;
        this.db.query(query, value, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
        
            console.log("items: ", res);
            result(null, res);
        });
    }

    update(id, item, result) {
        const query =  `UPDATE ?? SET ? WHERE id = ?`;
        const values = [this.tableName, item, id];
        this.db.query(query, values, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found item with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated item: ", { id: id, ...item });
            result(null, { id: id, ...item });
        });
    }

    delete(id, result) {
        const query =  `DELETE FROM ?? WHERE id = ?`;
        const values = [this.tableName, id];
        this.db.query(query, values, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            } else if (res.affectedRows == 0) {
                // not found item with the id
                result({ kind: "not_found" }, null);
                return;
            } else {
                console.log("deleted item with id: ", id);
                result(null, res);
            }
        });
    }

    deleteAll(result) {
        const query = `DELETE FROM ??`;
        const value = this.tableName;

        this.db.query(query, value, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            } else {
                console.log(`deleted ${res.affectedRows} items`);
                result(null, res);
            }
        });
    }
}

export default Model;