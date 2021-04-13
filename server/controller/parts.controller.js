import AEController from "./aecontroller";
import PartsModel from "../model/parts.model.js";

export default class PartsController extends AEController {    
    constructor() {
        super({
            model: new PartsModel(),
            itemName: "part"  
        });
    }
}
