import AEController from "./aecontroller";
import VehiclesModel from "../model/vehicles.model.js";

export default class VehiclesController extends AEController {    
    constructor() {
        super({
            model: new VehiclesModel(),
            itemName: "vehicle"  
        });
    }
}
