import React, { useState } from "react";
import AdminCarTable from "./AdminCarTable";
import AdminPartsTable from "./AdminPartsTable";
import AddNewCar from "./AddNewCar";
import AddNewPart from "./AddNewPart";
import DisplaySalesHistory from "./DisplaySalesHistory";
import Admin_Employee_Register from "./Admin_Employee_Register";

export default function Admin_Interface() {
    return (
        <div>
             <Admin_Employee_Register />
        </div>
    )
}
