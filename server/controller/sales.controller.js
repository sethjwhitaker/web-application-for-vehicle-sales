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

    // New Methods
    readByStatus(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin", "employee"], (err, decoded) => {
            if(err) {
                Controller.sendError(err, res);
            } else {
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
        });
    }


    // Overriden methods from Base Class

    // Admin/Employee Auth

    readAll(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin", "employee"], (err, decoded) => {
            if(err) {
                Controller.sendError(err, res);
            } else {
                super.read(req, res);
            }
        });
    }

    // Admin Auth

    deleteAll(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin"], (err, decoded) => {
            if(err) {
                Controller.sendError(err, res);
            } else {
                super.deleteAll(req, res);
            }
        });
    }

    // Admin, Employee, and customer auth

    create(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin", "employee", "customer"], (err, decoded) => {
            if(err) {
                Controller.sendError(err, res);
            } else if (decoded.type =="customer" && req.body.user_id != decoded.user_id) {
                Controller.sendError("Unauthorized", res);
            } else {
                super.create(req, res);
            }
        });
    }

    read(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin", "employee", "customer"], (err, decoded) => {
            if(err) {
                Controller.sendError(err, res);
            } else {
                this.model.read(req.params.id, (err, data) => {
                    if (err) {
                      if (err.kind === "not_found") {
                        res.status(404).send({
                          message: `Not found: ${this.itemName} with id ${req.params.id}.`
                        });
                      } else {
                        res.status(500).send({
                          message:
                          err.message || `An error occurred while retrieving ${this.itemName} with id ${req.params.id}.`
                        });
                      }
                    } else if (decoded.type =="customer" && data.user_id != decoded.user_id) {
                        Controller.sendError("Unauthorized", res);
                    } else res.send(data);
                });
            }
        });
    }

    update(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin", "employee", "customer"], (err, decoded) => {
            this.model.getUserId(req.body.id, (err, data) => {
                if(err) {
                    Controller.sendError(err, res);
                } else if (decoded.type =="customer" && data.user_id != decoded.user_id) {
                    Controller.sendError("Unauthorized", res);
                } else {
                    super.update(req, res);
                }
            });
        });
    }

    delete(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin", "employee", "customer"], (err, decoded) => {
            this.model.getUserId(req.body.id, (err, data) => {
                if(err) {
                    Controller.sendError(err, res);
                } else if (decoded.type =="customer" && data.user_id != decoded.user_id) {
                    Controller.sendError("Unauthorized", res);
                } else {
                    super.delete(req, res);
                }
            });
        });
    }
}
