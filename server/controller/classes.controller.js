import Controller from "./controller";
import ClassesModel from "../model/classes.model.js";

export default class ClassesController extends Controller {    
    constructor() {
        super({
            model: new ClassesModel(),
            itemName: "class"  
        });
    }
}
