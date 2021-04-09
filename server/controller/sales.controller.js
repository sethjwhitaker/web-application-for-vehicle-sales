import SalesModel from "../model/sales.model.js";
import Controller from "./controller";
import SaleItemsModel from "../model/sale_items.model";

export default class SalesController extends Controller {
    constructor() {
        super({
            model: new SalesModel(),
            itemName: "sale"
        });

        this.itemsModel = new SaleItemsModel();
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
                super.readAll(req, res);
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

                let message = "";

                if(!req.body) {
                    message = "Empty Request Body";
                } else if (!req.body.user_id) {
                    message = "Missing data: user_id";
                } else if (!req.body.sale_items) {
                    message = "Missing array: sale_items";
                } else if (req.body.sale_items.length <= 0) {
                    message = "Missing data: sale_items must have at least one item";
                }

                if (message) {
                    res.status(400).send({
                        message: message
                    });
                } else {
                    // Add sale to table
                    const obj = {
                        user_id: req.body.user_id
                    }

                    if(req.body.status) obj.status = req.body.status;
                    if(req.body.date) obj.date = req.body.date;
                    if(req.body.address) obj.address = req.body.address;

                    this.model.create(obj, (err, data) => {
                        if (err) {
                            res.status(500).send({
                                message:
                                err.message || `An error occurred while creating sale.`
                            });
                        } else {
                            // Add each of the sale items
                            const sale_items = req.body.sale_items;
                            const sale_id = data.id;
                            let success = true;

                            for (let i = 0; i < sale_items.length; i++) {
                                const sale_item = sale_items[i];
                                if (!sale_item.vehicle_id && !sale_item.part_id) {
                                    message = "Missing data: sale_item " + i + " vehicle_id or part_id";
                                } else if (sale_item.vehicle_id && sale_item.part_id) {
                                    message = "sale_item " + i + " only one of part_id or vehicle_id can be specified";
                                }

                                if (message) {
                                    success = false;
                                    res.status(400).send({
                                        message: message
                                    });
                                    break;
                                } else {
                                    const new_item = {
                                        sale_id: sale_id
                                    };
    
                                    if (sale_item.vehicle_id) new_item.vehicle_id = sale_item.vehicle_id;
                                    if (sale_item.part_id) new_item.part_id = sale_item.part_id;
                                    if (sale_item.quantity) new_item.quantity = sale_item.quantity;
    
                                    this.itemsModel.create(new_item, (err, data) => {
                                        if (err) {
                                            success = false;
                                            res.status(500).send({
                                                message:
                                                err.message || `An error occurred while creating sale_item.`
                                            });
                                        }
                                        
                                    });
                                }

                            }
                            if(success) {
                                res.send({
                                    message: `Successfully added sale: ${sale_id}`
                                });
                            }
                           
                        }

                    });
                }

                
                

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
                    } else {
                        this.itemsModel.readBySaleId(data.id, (err, d) => {
                            if (err) {
                                console.log(err);
                                res.status(500).send({
                                    message:
                                    err.message || `An error occurred while retrieving sale_item with id ${req.params.id}.`
                                });
                            } else {
                                data.sale_items = d;
                                res.send(data);
                            }
                        });   
                    }
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
