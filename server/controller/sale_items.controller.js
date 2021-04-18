import AEController from "./aecontroller";
import SaleItemsModel from "../model/sale_items.model.js";

export default class SaleItemsController extends AEController {    
    constructor() {
        super({
            model: new SaleItemsModel(),
            itemName: "sale_item"  
        });
    }
}