import React, { useState, useEffect } from "react";
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Test() {
    const url = "https://api.randomuser.me/";
    const [deleted, setDeleted] = useState(0);
    const [data, setData] = useState(null);
    const [editID, setEditID] = useState(null);
    const [editName, setEditName] = useState(null);
    const [newEditName, setNewEditName] = useState("");
    const [loading, setLoading] = useState(true);
    const [editClicked, setEditClicked] = useState(false);

    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        const [item] = data.results;
        setData(item);
        setLoading(false);
    }, [deleted]); //only rerender when deleted changes
    //empty array for onMount only

    //calls delete api with given id
    const onDelete = (e) => {
        setDeleted(deleted + 1);
        console.log(e.target.value);
    }

    //calls delete api with given id
    const onEdit = (e) => {
        console.log(newEditName);
    }

    const onEditClick = (e) => {
        setEditID(e.target.getAttribute('first'));
        setEditName(e.target.getAttribute('last'));
        setEditClicked(true);
    }

    return (
        <div>
            {/*if loading is true, display loading
            if editClicked is true, display edit form
            else display full table*/}
            {loading ? 

            //render loading
            <div className = "container-fluid"> ...loading</div> 
            
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
                <h2>Makes List</h2>
                <p>Note: Makes cannot be deleted if they exist in either sales history or current inventory.</p>
                <div className="tablediv">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Make ID</th>
                                <th>Make Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*loop to display each make on a row*/}
                                <tr key={data.name.first}>
                                    <td>{data.name.first}</td>
                                    <td>{data.name.last}</td>
                                    <td>
                                        <Button className="" first={data.name.first} last={data.name.last} onClick={(e) => {onEditClick(e)}} block type="submit">
                                            Edit
                                        </Button>
                                    </td>
                                    <td>
                                        <Button className="" value={data.name.first} onClick={(e) => {onDelete(e)}} block type="submit">
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                        </tbody>
                    </Table>
                </div>
            </div>}
        </div>
    )
}
