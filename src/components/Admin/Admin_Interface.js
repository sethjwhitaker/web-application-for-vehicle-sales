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

export default function Admin_Interface() {
    
    const [res, setres] = useState('types')

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
                <button onClick={() => setres('adminCarTable')}>Car Table</button>
                <button onClick={() => setres('adminPartTable')}>Part Table</button>
                <button onClick={() => setres('addNewCar')}>Add New Car</button>
                <button onClick={() => setres('addNewPart')}>Add New Part</button>
                <button onClick={() => setres('displaySalesHistory')}>Sales History</button>
                <button onClick={() => setres('adminEmployeeRegister')}>Register New Admin/Employee</button>
                <button onClick={() => setres('makes')}>View Makes</button>
                <button onClick={() => setres('types')}>View Types</button>
                <button onClick={() => setres('classes')}>View Classes</button>
            </div>

            {/* Actual rendering of selected component */}
            <div>{ render() }</div>
                       
        </div>
    )
}
