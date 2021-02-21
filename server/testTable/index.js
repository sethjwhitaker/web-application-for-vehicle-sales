import testController from "./test.controller.js";

export default app => {
    // Create a new Customer
    app.post("/testItems", testController.create);

    // Retrieve a single Customer with testItemId
    app.get("/testItems/:itemId", testController.read);
  
    // Retrieve all Customers
    app.get("/testItems", testController.readAll);
  
    // Update a Customer with testItemId
    app.put("/testItems/:itemId", testController.update);
  
    // Delete a Customer with testItemId
    app.delete("/testItems/:itemId", testController.delete);
  
    // Create a new Customer
    app.delete("/testItems", testController.deleteAll);
};