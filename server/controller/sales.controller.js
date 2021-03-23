import SalesModel from "../model/sales.model.js";
import Controller from "./controller";

export default class SalesController extends Controller {
    constructor() {
        super({
            model: new SalesModel(),
            itemName: "sale"
        });

        this.readByStatus = this.readByStatus.bind(this);
    }

    readByStatus(req, res) {
        this.model.readByStatus(req.params.status, (err, data) => {
            if (err) {
              if (err.kind === "not_found") {
                res.status(404).send({
                  message: `Not found: sale with status ${req.params.status}.`
                });
              } else {
                res.status(500).send({
                  message:
                  err.message || `An error occurred while retrieving sales with status ${req.params.status}.`
                });
              }
            } else res.send(data);
        });
    }
}
