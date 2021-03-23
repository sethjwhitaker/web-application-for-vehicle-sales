import TestController from "../controller/test.controller";
import SalesController from "../controller/sales.controller"

export default app => {

    // Test
    const testController = new TestController();

    app.post("/testItems", testController.create);

    app.get("/testItems/:id", testController.read);
  
    app.get("/testItems", testController.readAll);
  
    app.put("/testItems/:id", testController.update);
  
    app.delete("/testItems/:id", testController.delete);
  
    app.delete("/testItems", testController.deleteAll);

    // Sales
    const salesController = new SalesController();

    app.post("/sales", salesController.create);

    app.get("/sales/:id", salesController.read);

    app.get("/sales/status/:status", salesController.readByStatus);
  
    app.get("/sales", salesController.readAll);
  
    app.put("/sales/:id", salesController.update);
  
    app.delete("/sales/:id", salesController.delete);
  
    app.delete("/sales", salesController.deleteAll);
};