import Model from "./model.js";

export default class SalesModel extends Model {
    constructor() {
        super({
            tableName: "sales"
        });
    }

    readByStatus(status, result) {
        const query = `SELECT * FROM ?? WHERE order_status = ?`;
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
}