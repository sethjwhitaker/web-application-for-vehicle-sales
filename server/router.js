import SalesController from "./controller/sales.controller";
import UsersController from "./controller/users.controller";
import VehiclesController from "./controller/vehicles.controller";
import MakesController from "./controller/makes.controller";
import TypesController from "./controller/types.controller";
import ClassesController from "./controller/classes.controller";

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

    app.post("/users/create-first-admin", usersController.createFirstAdmin);

    app.post("/users/login", usersController.login);

    app.get("/users", usersController.readAll);

    app.put("/users/:id", usersController.update);
  
    app.delete("/users/:id", usersController.delete);
  
    app.delete("/users", usersController.deleteAll);

    // Vehicles
    const vehiclesController = new VehiclesController();

    app.post("/vehicles", vehiclesController.create);

    app.get("/vehicles/:id", vehiclesController.read);
  
    app.get("/vehicles", vehiclesController.readAll);
  
    app.put("/vehicles/:id", vehiclesController.update);
  
    app.delete("/vehicles/:id", vehiclesController.delete);
  
    app.delete("/vehicles", vehiclesController.deleteAll);

    // Makes
    const makesController = new MakesController();

    app.post("/makes", makesController.create);

    app.get("/makes/:id", makesController.read);
  
    app.get("/makes", makesController.readAll);
  
    app.put("/makes/:id", makesController.update);
  
    app.delete("/makes/:id", makesController.delete);
  
    app.delete("/makes", makesController.deleteAll);

    // Types
    const typesController = new TypesController();

    app.post("/types", typesController.create);

    app.get("/types/:id", typesController.read);
  
    app.get("/types", typesController.readAll);
  
    app.put("/types/:id", typesController.update);
  
    app.delete("/types/:id", typesController.delete);
  
    app.delete("/types", typesController.deleteAll);

    // Classes
    const classesController = new ClassesController();

    app.post("/classes", classesController.create);

    app.get("/classes/:id", classesController.read);
  
    app.get("/classes", classesController.readAll);
  
    app.put("/classes/:id", classesController.update);
  
    app.delete("/classes/:id", classesController.delete);
  
    app.delete("/classes", classesController.deleteAll);

};