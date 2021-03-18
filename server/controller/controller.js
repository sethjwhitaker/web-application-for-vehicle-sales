import jwt from 'jsonwebtoken';
class Controller {
    /*
        config: {
            model:
            itemName:
        }
    */
    constructor(config) {
        this.model = config.model;
        this.itemName = config.itemName;

        // bind this to methods
        this.create = this.create.bind(this);
        this.read = this.read.bind(this);
        this.readAll = this.readAll.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
    }

    create(req, res) {
        // Validate request
        if (!req.body) {
            res.status(400).send({
                message: "Request Body cannot be empty."
            });
        }

        // Create a model
        const obj = req.body;

        // Save TestModel in the database
        this.model.create(obj, (err, data) => {
            if (err)
            res.status(500).send({
                message:
                err.message || `An error occurred while creating ${this.itemName}.`
            });
            else res.send(data);
        });
    }

    read(req, res) {
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
            } else res.send(data);
        });
    }

    // Retrieve all items from the database.
    readAll(req, res) {
        this.model.readAll((err, data) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || `An error occurred while retrieving ${this.itemName} list.`
              });
            else res.send(data);
        });
    } 

    // Update a item identified by the id in the request
    update(req, res) {
        // Validate Request
        if (!req.body) {
            res.status(400).send({
                message: "Request Body cannot be empty."
            });
        }
        
        this.model.update(req.params.id, req.body, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found: ${this.itemName} with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: 
                            err.message || `An error occurred while updating ${this.itemName} with id ${req.params.id}.`
                    });
                }
            } else res.send(data);
        });
    }

    delete(req, res) {
        this.model.delete(req.params.id, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found: ${this.itemName} with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: 
                            err.message || `An error occurred while deleting ${this.itemName} with id ${req.params.id}.`
                    });
                }
            } else res.send({ message: `${this.itemName} with id ${req.params.id} was deleted successfully!` });
        });
    }

    deleteAll(req, res) {
        this.model.deleteAll((err, data) => {
            if (err)
                res.status(500).send({
                    message:
                    err.message || `An error occurred while deleting every ${this.itemName}.`
                });
            else res.send({ message: `Every ${this.itemName} was deleted successfully!` });
          });
    }

    static async verifyUser(token, types, callback) {
        jwt.verify(token, process.env.SESSION_KEY, (err, decoded) => {
            if(err) {
                callback(err, null);
            } else if(!types.includes(decoded.type)) {
                callback("Unauthorized", null);
            } else {
                callback(null, decoded);
            }
        });
    }

}

export default Controller;