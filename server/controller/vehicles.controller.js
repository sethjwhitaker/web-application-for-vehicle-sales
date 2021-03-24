import Controller from "./controller";
import VehiclesModel from "../model/vehicles.model.js";

export default class VehiclesController extends Controller {    
    constructor() {
        super({
            model: new VehiclesModel(),
            itemName: "vehicle"  
        });
    }
}
