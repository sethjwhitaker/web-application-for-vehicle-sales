import Controller from "./controller";

// This controller allows anyone to read data, but only Admins and employees can CRUD it.
export default class AEController extends Controller {    
    constructor(config) {
        super(config);
    }

    create(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin", "employee"], (err, decoded) => {
            if(err) {
                Controller.sendError(err, res);
            } else {
                super.create(req, res);
            }
        });
    }

    update(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin", "employee"], (err, decoded) => {
            if(err) {
                Controller.sendError(err, res);
            } else {
                super.update(req, res);
            }
        });
    }
    
    delete(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin", "employee"], (err, decoded) => {
            if(err) {
                Controller.sendError(err, res);
            } else {
                super.delete(req, res);
            }
        });
    }

    deleteAll(req, res) {
        Controller.verifyUser(req.cookies.token, ["admin"], (err, decoded) => {
            if(err) {
                Controller.sendError(err, res);
            } else {
                super.deleteAll(req, res);
            }
        });
    }

}
