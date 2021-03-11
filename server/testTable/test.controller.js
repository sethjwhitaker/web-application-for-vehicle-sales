import TestModel from "./test.model.js";

export default class TestController {
    // Create and save new item
    static create(req, res) {
        // Validate request
        if (!req.body) {
            res.status(400).send({
            message: "Content can not be empty!"
            });
        }

        // Create a TestModel
        const testObj = new TestModel(req.body);

        // Save TestModel in the database
        TestModel.create(testObj, (err, data) => {
            if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the item."
            });
            else res.send(data);
        });
    }

    // Find a single item with an itemId
    static read(req, res) {
        TestModel.read(req.params.itemId, (err, data) => {
            if (err) {
              if (err.kind === "not_found") {
                res.status(404).send({
                  message: `Not found item with id ${req.params.itemId}.`
                });
              } else {
                res.status(500).send({
                  message: "Error retrieving item with id " + req.params.itemId
                });
              }
            } else res.send(data);
          });
    }

    // Retrieve all items from the database.
    static readAll(req, res) {
        TestModel.readAll((err, data) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving item."
              });
            else res.send(data);
        });
    } 

    // Update a item identified by the itemId in the request
    static update(req, res) {
        // Validate Request
        if (!req.body) {
            res.status(400).send({
            message: "Content can not be empty!"
            });
        }
        
        TestModel.update(req.params.itemId, new TestModel(req.body), (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found item with id ${req.params.itemId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating item with id " + req.params.itemId
                    });
                }
            } else res.send(data);
        });
    }

    // Delete an item with the specified itemId in the request
    static delete(req, res) {
        TestModel.delete(req.params.itemId, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found item with id ${req.params.itemId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Could not delete item with id " + req.params.itemId
                    });
                }
            } else res.send({ message: `item was deleted successfully!` });
        });
    }
    
    // Delete all items from the database.
    static deleteAll(req, res) {
        TestModel.deleteAll((err, data) => {
            if (err)
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while removing all items."
                });
            else res.send({ message: `All items were deleted successfully!` });
          });
    }

}
