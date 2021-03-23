import Controller from "./controller";
import TestModel from "../model/test.model.js";

export default class TestController extends Controller {    
    constructor() {
        super({
            model: new TestModel(),
            itemName: "test item"  
        });
    }
}
