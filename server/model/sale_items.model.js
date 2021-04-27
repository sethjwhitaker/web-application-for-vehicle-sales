import Model from './model';

export default class SaleItemsModel extends Model {
    constructor() {
        super({tableName: "sale_items"});
    }

    deleteByKeyValue(obj, result) {
        const query =  `DELETE FROM ?? WHERE ?? = ?`;
        const values = [this.tableName, obj.key, obj.value];
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
                console.log("deleted item with " + obj.key + ": " + obj.value);
                result(null, res);
            }
        });
    }

    readBySaleId(id, result) {
        const query = `SELECT vehicle_id, part_id, quantity FROM ?? WHERE sale_id = ?`;
        const values = [this.tableName, id];
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