import Model from './model';

export default class VehiclesModel extends Model {
    constructor() {
        super({tableName: "vehicles"});
    }

    read(itemId, result) {
        const query = `SELECT v.id, m.name as make, model, t.name as type, c.name as class,
                        year, price, exterior_color, interior_color, engine, transmission,
                        mileage, short_description, description, image
                        FROM vehicles v
                        JOIN makes m ON m.id = v.make_id
                        JOIN types t ON t.id = v.type_id
                        JOIN classes c ON c.id = v.class_id
                        WHERE v.id = ?`;
        const values = itemId;
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
        const query = `SELECT v.id, m.name as make, model, t.name as type, c.name as class,
                        year, price, exterior_color, interior_color, engine, transmission,
                        mileage, short_description, description, image
                        FROM vehicles v
                        JOIN makes m ON m.id = v.make_id
                        JOIN types t ON t.id = v.type_id
                        JOIN classes c ON c.id = v.class_id`;
        this.db.query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
        
            console.log("items: ", res);
            result(null, res);
        });
    }
}