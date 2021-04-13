import AEController from "./aecontroller";
import TypesModel from "../model/types.model.js";

export default class TypesController extends AEController {    
    constructor() {
        super({
            model: new TypesModel(),
            itemName: "type"  
        });
    }
}
