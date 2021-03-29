import Model from './model';

export default class SaleItemsModel extends Model {
    constructor() {
        super({tableName: "sale_items"});
    }
}