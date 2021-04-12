import React, { useState } from "react";
import AdminCarTable from "./AdminCarTable";
import AdminPartsTable from "./AdminPartsTable";
import AddNewCar from "./AddNewCar";
import AddNewPart from "./AddNewPart";
import DisplaySalesHistory from "./DisplaySalesHistory";

export default function Admin_Interface() {
    return (
        <div>
            <AdminCarTable />

            <AdminPartsTable />

            <AddNewCar />
            
            <AddNewPart />   

            <DisplaySalesHistory />
        </div>
    )
}
