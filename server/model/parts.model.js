import Model from './model';

export default class PartsModel extends Model {
    constructor() {
        super({tableName: "parts"});
    }
}