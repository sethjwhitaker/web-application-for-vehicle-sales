import AEController from "./aecontroller";
import ClassesModel from "../model/classes.model.js";

export default class ClassesController extends AEController {    
    constructor() {
        super({
            model: new ClassesModel(),
            itemName: "class"  
        });
    }
}
