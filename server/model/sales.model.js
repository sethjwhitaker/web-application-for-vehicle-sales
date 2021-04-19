import Model from "./model.js";

export default class SalesModel extends Model {
    constructor() {
        super({
            tableName: "sales"
        });
    }

    getCart(user_id, result) {
        const query = `SELECT * FROM ?? WHERE status = 'in_cart' 
                        AND user_id = ?
                        `;
        const values = [this.tableName, user_id];
        this.db.query(query, values, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
        
            if (res.length) {
                console.log("found items: ", res);
                result(null, res);
                return;
            }
        
            // not found items with the status
            result({ kind: "not_found" }, null);
        });
    }

    readByStatus(status, result) {
        const query = `SELECT * FROM ?? WHERE status = ?`;
        const values = [this.tableName, status];
        this.db.query(query, values, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
        
            if (res.length) {
                console.log("found items: ", res);
                result(null, res);
                return;
            }
        
            // not found items with the status
            result({ kind: "not_found" }, null);
        });
    }

    getUserId(sale_id, result) {
        const query = `SELECT user_id FROM sales WHERE id = ?`;
        this.db.query(query, sale_id, (err, res) => {
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
        })
    }

    /*delete(id, result) {
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
    }*/
}
