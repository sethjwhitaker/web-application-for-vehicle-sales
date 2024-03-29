import React, { useState, useEffect } from "react";
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function TypeTable() {
    const url = `${window.location.protocol}//${window.location.hostname}/types`;
    const [newMake, setnewMake] = useState("");
    const [deleted, setDeleted] = useState(0);
    const [data, setData] = useState(null);
    const [reload, setReload] = useState(null);
    const [editID, setEditID] = useState(null);
    const [editName, setEditName] = useState(null);
    const [newEditName, setNewEditName] = useState("");
    const [loading, setLoading] = useState(true);
    const [editClicked, setEditClicked] = useState(false);

    function validateForm() {
        return newMake.length > 0;
    }

    function handleSubmit(event) {
        // POST request using fetch()
        fetch(`${window.location.protocol}//${window.location.hostname}/types`, {
          
        // Adding method type
        method: "POST",
          
        // Adding body or contents to send
        body: JSON.stringify({
          name: newMake,
      }),
          
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
      })
  
      // Converting to JSON
      .then(response => response.json())
  
      // Displaying results to console
      .then(json => console.log(json))

      .then(setDeleted(deleted + 1));
      
    }

    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
    }, [deleted, reload]); //only rerender when deleted changes
    //empty array for onMount only

    //pops up a confirm alert for delete
    const onDelete = (e) => {
        var res = confirm("Press OK to send delete request");
        if (res == true) {
            onDeleteConfirm(e);
        }
        else {

        }
    }

    //calls delete api with given id
    const onDeleteConfirm = (e) => {
        console.log(e.target.value);

        // POST request using fetch()
        fetch(`${window.location.protocol}//${window.location.hostname}/types/${e.target.value}`, {
            
        // Adding method type
        method: "DELETE",
            
        // Adding body or contents to send
        body: JSON.stringify({
            id: e.target.value
        }),
            
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
    
        // Converting to JSON
        .then(response => response.json())
    
        // Displaying results to console
        .then(json => console.log(json))

        .then(setDeleted(deleted + 1));
    }

    //pops up a confirm alert for edit
    const onEdit = (e) => {
        var res = confirm("Press OK to send update request");
        if (res == true) {
            onEditConfirm(e);
        }
        else {

        }
    }

    //calls edit api with given id
    const onEditConfirm = (e) => {
        // POST request using fetch()
        fetch(`${window.location.protocol}//${window.location.hostname}/types/${editID}`, {
            
        // Adding method type
        method: "PUT",
            
        // Adding body or contents to send
        body: JSON.stringify({
            id: editID,
            name: newEditName
        }),
            
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
    
        // Converting to JSON
        .then(response => response.json())
    
        // Displaying results to console
        .then(json => console.log(json));
    }

    const onEditClick = (e) => {
        setEditID(e.target.getAttribute('id'));
        setEditName(e.target.getAttribute('name'));
        setEditClicked(true);
    }

    return (
        <div>
            <div className="container">
            <h2>Add New Type</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="newMake">
                    <Form.Label>New Type</Form.Label>
                    <Form.Control
                        type="newMake"
                        value={newMake}
                        onChange={(e) => setnewMake(e.target.value)}
                    />
                </Form.Group>
                
                <Button variant="success" className="" block type="submit" disabled={!validateForm()}>
                    Add
                </Button>

                <br></br>
            </Form>        
        </div>
    
            {/*if loading is true, display loading
            if editClicked is true, display edit form
            else display full table*/}
            {loading ? 

            //render loading
            <div className = "container-fluid"> ...loading</div> 
            
            //if editClicked is true...
            : editClicked ? 

            //render Edit form
            <div className = "container"> 
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
                    
                    <Button variant="success" className="" block type="submit">
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
                <h2>Types List</h2>
                <p>Note: Types cannot be deleted if they exist in either sales history or current inventory.</p>
                <div className="tablediv">
                    <Button variant="secondary" className="" onClick={(e) =>            
                            {setReload(reload + 1)}} block type="submit">
                        Reload Table
                    </Button>
                    <Table responsive striped hover className="admintable">
                        <thead>
                            <tr>
                                <th>Type ID</th>
                                <th>Type Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*loop to display each type on a row*/}
                            {data.map((e) => (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>
                                        <Button variant="warning" className="" id={e.id} name={e.name} onClick={(e) => {
                                                onEditClick(e)}
                                            }
                                            block
                                            type="submit">
                                            Edit
                                        </Button>
                                    </td>
                                    <td>
                                        <Button variant="danger" className="" value={e.id} onClick={(e) => {
                                                onDelete(e)}
                                            }
                                            block 
                                            type="submit">
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))} 
                        </tbody>
                    </Table>
                </div>
            </div>}
        </div>
    )
}
