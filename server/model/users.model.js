import Model from './model';

export default class UserModel extends Model {
    constructor() {
        super({tableName: "users"});
    }
    
    readByEmail(email, result) {
        const query = `SELECT id, first_name, last_name, type, password_hash, type FROM users WHERE email = ?`;
        this.db.query(query, email, (err, res) => {
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
}