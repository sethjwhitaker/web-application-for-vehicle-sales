import Controller from "./controller";
import MakesModel from "../model/makes.model.js";

export default class MakesController extends Controller {    
    constructor() {
        super({
            model: new MakesModel(),
            itemName: "make"  
        });
    }
}
