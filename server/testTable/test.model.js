import db from '../db.js';

export default class TestModel {
    constructor(item) {
        this.email = item.email;
        this.name = item.name;
        this.active = item.active;
    }

    static create(newItem, result) {
        db.query("INSERT INTO test_table SET ?", newItem, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
        
            console.log("created item: ", { id: res.insertId, ...newItem });
            result(null, { id: res.insertId, ...newItem });
        });
    }

    static read(itemId, result) {
        db.query(`SELECT * FROM test_table WHERE id = ${itemId}`, (err, res) => {
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
    
    static readAll(result) {
        db.query("SELECT * FROM test_table", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
        
            console.log("items: ", res);
            result(null, res);
        });
    }

    static update(id, item, result) {
        db.query(
            "UPDATE test_table SET email = ?, name = ?, active = ? WHERE id = ?",
            [item.email, item.name, item.active, id],
            (err, res) => {
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

    static delete(id, result) {
        db.query("DELETE FROM test_table WHERE id = ?", id, (err, res) => {
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

            console.log("deleted item with id: ", id);
            result(null, res);
        });
    }

    static deleteAll(result) {
        db.query("DELETE FROM test_table", (err, res) => {
            if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
            }

            console.log(`deleted ${res.affectedRows} items`);
            result(null, res);
        });
    }
}