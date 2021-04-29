import AEController from "./aecontroller";
import MakesModel from "../model/makes.model.js";

export default class MakesController extends AEController {    
    constructor() {
        super({
            model: new MakesModel(),
            itemName: "make"  
        });
    }
}
