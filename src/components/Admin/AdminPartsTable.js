import React, { useState, useEffect } from "react";
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AdminPartsTable() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    //api fetch call for vehicle list
    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setData(data);
        setLoading(false);
    }, []); //only rerender when deleted changes
    //empty array for onMount only

    return (
        <div>Part Table</div>
    )
}
