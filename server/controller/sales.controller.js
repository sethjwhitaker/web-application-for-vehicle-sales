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

        this.getCart = this.getCart.bind(this);
        this.readByStatus = this.readByStatus.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    getCart(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin","employee", "customer"], (err, decoded) => {
            
            if(err) {
                Controller.sendError(err, res);
            } else {
                this.model.getCart(decoded.user_id, (err, data) => {
                    data = data[0];
                    if (err) {
                        if (err.kind === "not_found") {
                            res.status(404).send({
                            message: `Not found: sale with status ${req.params.status}.`
                            });
                        }  else {
                            res.status(500).send({
                            message:
                            err.message || `An error occurred while retrieving cart.`
                            });
                        }
                    } else if (decoded.type =="customer" && data.user_id != decoded.user_id) {
                        Controller.sendError("Unauthorized", res);
                    } else {
                        this.itemsModel.readBySaleId(data.id, (err, d) => {
                            if (err) {
                                if (err.kind === "not_found") {
                                    data.sale_items = [];
                                    res.send(data);
                                } else {
                                    console.log(err);
                                    res.status(500).send({
                                        message:
                                        err.message || `An error occurred while retrieving sale_item with id ${req.params.id}.`
                                    });
                                }
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

    addItem(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin", "employee", "customer"], (err, decoded) => {
            if(err) {
                Controller.sendError(err, res);
            } else {
                this.model.getUserId(req.params.id, (err, data) => {
                    if (decoded.type =="customer" && data.user_id != decoded.user_id) {
                        Controller.sendError("Unauthorized", res);
                    } else {
    
                        let message = "";
    
                        if (!req.body.vehicle_id && !req.body.part_id) {
                            message = "Missing data: sale_item " + i + " vehicle_id or part_id";
                        } else if (req.body.vehicle_id && req.body.part_id) {
                            message = "sale_item " + i + " only one of part_id or vehicle_id can be specified";
                        }
    
                        if (message) {
                            success = false;
                            res.status(400).send({
                                message: message
                            });
                        } else {
                            const new_item = {
                                sale_id: req.params.id
                            };
    
                            if (req.body.vehicle_id) new_item.vehicle_id = req.body.vehicle_id;
                            if (req.body.part_id) new_item.part_id = req.body.part_id;
                            if (req.body.quantity) new_item.quantity = req.body.quantity;
    
                            this.itemsModel.create(new_item, (err, data) => {
                                if (err) {
                                    res.status(500).send({
                                        message:
                                        err.message || `An error occurred while creating sale_item.`
                                    });
                                } else {
                                    res.send({
                                        message: `Successfully modified sale: ${req.params.id}`
                                    });
                                }
                            });
                        }
                    }
                });
            }
        });
    }

    removeItem(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin", "employee", "customer"], (err, decoded) => {
            this.model.getUserId(req.params.id, (err, data) => {
                if(err) {
                    Controller.sendError(err, res);
                } else if (decoded.type =="customer" && data.user_id != decoded.user_id) {
                    Controller.sendError("Unauthorized", res);
                } else {

                    let message = "";

                    if (!req.body.vehicle_id && !req.body.part_id) {
                        message = "Missing data: sale_item " + i + " vehicle_id or part_id";
                    } else if (req.body.vehicle_id && req.body.part_id) {
                        message = "sale_item " + i + " only one of part_id or vehicle_id can be specified";
                    }

                    if (message) {
                        success = false;
                        res.status(400).send({
                            message: message
                        });
                    } else {
                        const obj = {};

                        if (req.body.vehicle_id) {
                            obj.key = "vehicle_id";
                            obj.value = req.body.vehicle_id;
                        } else if (req.body.part_id) {
                            obj.key = "part_id";
                            obj.value = req.body.part_id;
                        } 

                        this.itemsModel.deleteByKeyValue(obj, (err, data) => {
                            if (err) {
                                res.status(500).send({
                                    message:
                                    err.message || `An error occurred while removing sale_item.`
                                });
                            } else {
                                res.send({
                                    message: `Successfully modified sale: ${req.params.id}`
                                });
                            }
                        });
                    }
                }
            });
        });
    }

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
            console.log(decoded);
            if(err) {
                Controller.sendError(err, res);
            } else {
                this.model.readAll((err, data) => {
                    if (err) {
                      if (err.kind === "not_found") {
                        res.status(404).send({
                          message: `Not found: sales`
                        });
                      } else {
                        res.status(500).send({
                          message:
                          err.message || `An error occurred while retrieving sales.`
                        });
                      }
                    } else {
                        if(data.length <= 0) {
                            res.send(data);
                        } else {
                            for(let i = 0; i < data.length; i++) {
                                this.itemsModel.readBySaleId(data[i].id, (err, d) => {
                                    if (err) {
                                        success = false;
                                        res.status(500).send({
                                            message:
                                            err.message || `An error occurred while retrieving sale_item with sale_id ${data[i].id}.`
                                        });
                                    } else {
                                        data[i].sale_items = d;
                                        if(i == data.length-1) {
                                            res.send(data);
                                        }
                                    }
                                });   
                            }
                        }
                    }
                });
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
                                        } else if(i == sale_items.length-1) {
                                            res.send({
                                                message: `Successfully added sale: ${sale_id}`
                                            });
                                        }
                                    });
                                }

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
            console.log(err);
            this.model.getUserId(req.params.id, (err, data) => {
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
            this.model.getUserId(req.params.id, (err, data) => {
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
