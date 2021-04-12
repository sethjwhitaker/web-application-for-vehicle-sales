import Controller from "./controller";
import TypesModel from "../model/types.model.js";

export default class TypesController extends Controller {    
    constructor() {
        super({
            model: new TypesModel(),
            itemName: "type"  
        });
    }
}
