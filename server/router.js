import SalesController from "./controller/sales.controller";
import UsersController from "./controller/users.controller";

export default app => {

    // Sales
    const salesController = new SalesController();

    app.post("/sales", salesController.create);

    app.get("/sales/:id", salesController.read);

    app.get("/sales/status/:status", salesController.readByStatus);
  
    app.get("/sales", salesController.readAll);
  
    app.put("/sales/:id", salesController.update);
  
    app.delete("/sales/:id", salesController.delete);
  
    app.delete("/sales", salesController.deleteAll);

    // Users
    const usersController = new UsersController();

    app.post("/users/register", usersController.register);
    
    app.post("/users/register/:type", usersController.registerAdmin);

    app.post("/users/login", usersController.login);

    app.get("/users", usersController.readAll);
};