import React, { useState, useEffect } from "react";
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AdminCarTable() {
    const url = `${window.location.protocol}//${window.location.hostname}/vehicles`;
    const [deleted, setDeleted] = useState(0);
    const [data, setData] = useState(null);
    const [deleteID, setDeleteID] = useState(null);
    const [editID, setEditID] = useState(null);
    const [editName, setEditName] = useState(null);
    const [newEditName, setNewEditName] = useState("");
    const [loading, setLoading] = useState(true);
    const [editClicked, setEditClicked] = useState(false);

    //api fetch call
    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setData(data);
        setLoading(false);
    }, [deleted]); //only rerender when deleted changes
    //empty array for onMount only

    //calls delete api with given id
    const onDelete = (e) => {
        
    }

    //calls delete api with given id
    const onEdit = (e) => {
        
    }

    const onEditClick = (e) => {
        setEditID(e.target.getAttribute('id'));
        setEditName(e.target.getAttribute('name'));
        setEditClicked(true);
    }

    return (    
        <div>
            {/*if loading is true, display loading
            if editClicked is true, display edit form
            else display full table*/}
            {loading ? 

            //render loading
            <div className = "container-fluid">loading...</div> 
            
            //if editClicked is true...
            : editClicked ? 

            //render Edit form
            <div className = "container-fluid"> 
                <h2>Edit ID {editID}</h2>
                <Form onSubmit={(e) => {onEdit(e)}}>
                    <Form.Group controlId="newEditName">
                        <Form.Label>New Name</Form.Label>
                        <Form.Control
                            type="newEditName"
                            value={newEditName}
                            onChange={(e) => setNewEditName(e.target.value)}
                        />
                    </Form.Group>
                    
                    <Button className="" block type="submit">
                        Submit
                    </Button>
                </Form>   
                <br></br>
                <Button className="" onClick={(e) => {setEditClicked(false)}} block type="submit">
                    Back To Table
                </Button>
            </div> 

            //else
            :

            //display full table
            <div className = "container-fluid"> 
                <h2>Car Table</h2>
                <div className="tablediv">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Make ID</th>
                                <th>Type ID</th>
                                <th>Class ID</th>
                                <th>Model</th>
                                <th>Year</th>
                                <th>Price</th>
                                <th>Exterior Color</th>
                                <th>Interior Color</th>
                                <th>Engine</th>
                                <th>Transmission</th>
                                <th>Mileage</th>
                                <th>Short Description</th>
                                <th>Full Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*loop to display each make on a row*/}
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tbody>
                    </Table>
                </div>
            </div>}
        </div>
    )
}
