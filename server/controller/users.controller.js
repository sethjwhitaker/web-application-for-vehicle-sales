import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import Controller from "./controller";
import UserModel from "../model/users.model.js";

export default class UserController extends Controller {    
    constructor() {
        super({
            model: new UserModel(),
            itemName: "user"  
        });

        this.register = this.register.bind(this);
        this.registerAdmin = this.registerAdmin.bind(this);
        this.createFirstAdmin = this.createFirstAdmin.bind(this);
        this.login = this.login.bind(this);
        /*this.readAll = this.readAll.bind(this);
        this.read = this.read.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.deleteAll = this.deleteAll.bind(this);*/

    }

    async register(req, res) {
        // Validate request
        let message = undefined;
        
        if(!req.body) {
            message = "Empty Request Body";
        } else if (!req.body.first_name) {
            message = "Missing data: first_name";
        } else if (!req.body.last_name) {
            message = "Missing data: last_name";
        } else if (!req.body.email) {
            message = "Missing data: email";
        } else if (!req.body.password) {
            message = "Missing data: password";
        }

        if (message) {
            res.status(400).send({
                message: message
            });
        }

        // hash the newly created password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);

        const obj = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password_hash: hash,
            password_hash_algorithm: "bcrypt"
        }

        // Save User in the database
        this.model.create(obj, (err, data) => {
            if (err)
            res.status(500).send({
                message:
                err.message || `An error occurred while creating ${this.itemName}.`
            });
            else {
                res.send({
                    message: "Successfully created user " + data.email
                });
            }
        });
    }

    async registerAdmin(req, res) {
        
        // Authenticate
        Controller.verifyUser(req.cookies.token, ["admin"], async (err, decoded) => {
            if(err) {
                Controller.sendError(err, res);
            } else {
                // Validate request
                let message = undefined;
                
                if(!req.body) {
                    message = "Empty Request Body";
                } else if (!req.body.first_name) {
                    message = "Missing data: first_name";
                } else if (!req.body.last_name) {
                    message = "Missing data: last_name";
                } else if (!req.body.email) {
                    message = "Missing data: email";
                } else if (!req.body.password) {
                    message = "Missing data: password";
                } else if (req.params.type != "admin" && req.params.type != "employee" && req.params.type != "customer") {
                    message = "Invalid Request. Only admin, employee, and customer users can be registered.";
                }

                if (message) {
                    res.status(400).send({
                        message: message
                    });
                } else {
                    // hash the newly created password
                    const salt = await bcrypt.genSalt(10);
                    const hash = await bcrypt.hash(req.body.password, salt);

                    const obj = {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        type: req.params.type,
                        password_hash: hash,
                        password_hash_algorithm: "bcrypt"
                    }

                    // Save User in the database
                    this.model.create(obj, (err, data) => {
                        if (err)
                        res.status(500).send({
                            message:
                            err.message || `An error occurred while creating ${this.itemName}.`
                        });
                        else {
                            res.send({
                                message: `Successfully created ${req.params.type} user ` + data.email
                            });
                        }
                    });
                }

                
            }
        })
    }

    async createFirstAdmin(req, res) {
    
        // Only create first admin if there are no other users
        this.model.readAll(async (err, data) => {
            if(data.length != 0) {
                res.status(403).send({
                    message: "Unauthorized"
                })
            } else {
                
                // Validate data
                let message = undefined;
        
                if(!req.body) {
                    message = "Empty Request Body";
                } else if (!req.body.first_name) {
                    message = "Missing data: first_name";
                } else if (!req.body.last_name) {
                    message = "Missing data: last_name";
                } else if (!req.body.email) {
                    message = "Missing data: email";
                } else if (!req.body.password) {
                    message = "Missing data: password";
                }

                if (message) {
                    res.status(400).send({
                        message: message
                    });
                } else {

                    // hash the newly created password
                    const salt = await bcrypt.genSalt(10);
                    const hash = await bcrypt.hash(req.body.password, salt);

                    const obj = {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        type: "admin",
                        password_hash: hash,
                        password_hash_algorithm: "bcrypt"
                    }

                    // Save User in the database
                    this.model.create(obj, (err, data) => {
                        if (err)
                        res.status(500).send({
                            message:
                            err.message || `An error occurred while creating First Admin.`
                        });
                        else {
                            res.send({
                                message: "Successfully created user " + data.email
                            });
                        }
                    });
                }

                
            }
        });

        
    }


    async login(req, res) {
        // Validate Request
        let message = undefined;
        
        if(!req.body) {
            message = "Empty Request Body";
        } else if (!req.body.email) {
            message = "Missing data: email";
        } else if (!req.body.password) {
            message = "Missing data: password";
        }

        if (message) {
            res.status(400).send({
                message: message
            });
        } else {
            this.model.readByEmail(req.body.email, async (err, data) => {
                if(err) {
                    if (err.kind === "not_found") {
                        res.status(401).send({
                            message: `Not found: user with email ${req.body.email}.`
                        });
                    } else {
                        res.status(500).send({
                            message:
                            err.message || `An error occurred while logging in.`
                        });
                    }
                } else {
                    // if password matches, then authorize
                    if (await bcrypt.compare(req.body.password, data.password_hash)) {
                        const tokenData = {
                            user_id: data.id,
                            type: data.type
                        }
                        const token = jwt.sign(tokenData, process.env.SESSION_KEY, {expiresIn: "7d"});
                        res.cookie('token', token, {httpOnly: true});
                        res.send({
                            user_id: data.id,
                            first_name: data.first_name,
                            last_name: data.last_name
                        });
                    } else {
                        res.status(401).send({
                            message: "Incorrect Password."
                        });
                    }
                }
            });
        }
    }

    readAll(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin"], (err, decoded) => {
            if(err) {
                Controller.sendError(err, res);
            } else if(decoded.type != "admin") {
                Controller.sendError("Unauthorized", res);
            } else {
                super.readAll(req, res);
            }
        });
    }

    read(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin", "employee", "customer"], (err, decoded) => {
            if(err) {
                Controller.sendError(err, res);
            } else if(decoded.user_id != req.params.id && decoded.type != "admin") {
                Controller.sendError("Unauthorized", res);
            } else {
                super.read(req, res);
            }
        });
    }

    update(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin", "employee", "customer"], (err, decoded) => {
            if(err) {
                Controller.sendError(err, res);
            } else if(decoded.user_id != req.params.id && decoded.type != "admin") {
                Controller.sendError("Unauthorized", res);
            } else {
                super.update(req, res);
            }
        });
    }

    delete(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin", "employee", "customer"], (err, decoded) => {
            if(err) {
                Controller.sendError(err, res);
            } else if(decoded.user_id != req.params.id && decoded.type != "admin") {
                Controller.sendError("Unauthorized", res);
            } else {
                super.delete(req, res);
            }
        });
    }

    deleteAll(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin"], (err, decoded) => {
            if(err) {
                Controller.sendError(err, res);
            } else if(decoded.type != "admin") {
                Controller.sendError("Unauthorized", res);
            } else {
                super.deleteAll(req, res);
            }
        });
    }
}
