import React, { useState } from "react";
import AdminCarTable from "./AdminCarTable";
import AdminPartsTable from "./AdminPartsTable";
import AddNewCar from "./AddNewCar";
import AddNewPart from "./AddNewPart";
import DisplaySalesHistory from "./DisplaySalesHistory";
import Admin_Employee_Register from "./Admin_Employee_Register";
import Types from "./Types/Types";
import Classes from "./Classes/Classes";
import Makes from './Makes/Makes';
import Button from "react-bootstrap/Button";
import styles from "./admin.css";

export default function Admin_Interface() {
    
    const [res, setres] = useState('adminCarTable')

    //chooses what to render based on res
    const render = () => {
        switch(res) {
            case 'addNewCar': return <AddNewCar />;
            case 'adminEmployeeRegister': return <Admin_Employee_Register />;
            case 'addNewPart': return <AddNewPart />;
            case 'adminCarTable': return <AdminCarTable />;
            case 'adminPartTable': return <AdminPartsTable />;
            case 'displaySalesHistory': return <DisplaySalesHistory />;
            case 'makes': return <Makes />;
            case 'types': return <Types />;
            case 'classes': return <Classes />;

            default: return <h1>This shouldn't happen, the switch statement is broken</h1>;
        }
    }

    return (

        <div>
            <div className="container-fluid">
                <h1>Admin Interface</h1>
                <Button className="col-6 col-md-4 adminButton" onClick={() => setres('adminCarTable')}>Car Table</Button>
                <Button className="col-6 col-md-4 adminButton" onClick={() => setres('adminPartTable')}>Part Table</Button>
                <Button className="col-6 col-md-4 adminButton" onClick={() => setres('addNewCar')}>Add Car</Button>
                <Button className="col-6 col-md-4 adminButton" onClick={() => setres('addNewPart')}>Add Part</Button>
                <Button className="col-6 col-md-4 adminButton" onClick={() => setres('displaySalesHistory')}>Sales History</Button>
                <Button className="col-6 col-md-4 adminButton" onClick={() => setres('makes')}>View Makes</Button>
                <Button className="col-6 col-md-4 adminButton" onClick={() => setres('types')}>View Types</Button>
                <Button className="col-6 col-md-4 adminButton" onClick={() => setres('classes')}>View Classes</Button>
                <Button className="col-12 col-md-4 adminButton" onClick={() => setres('adminEmployeeRegister')}>Register New User</Button>
            </div>

            {/* Actual rendering of selected component */}
            <div>{ render() }</div>
                       
        </div>
    )
}
