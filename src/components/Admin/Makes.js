import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';

export default function Makes() {
    const [newMake, setnewMake] = useState("");

    function validateForm() {
        return newMake.length > 0;
    }

    async function getMakes() {
        fetch(`${window.location.protocol}//${window.location.hostname}/makes`, {

            headers: {
            "Content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log("data is:");
            console.log(data);
        });
        
    }

    const makes = await getMakes();

    function handleSubmit(event) {

        event.preventDefault();
        // POST request using fetch()
        fetch(`${window.location.protocol}//${window.location.hostname}/makes`, {
          
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
      .then(json => console.log(json));
    }

    return (
    <div className="container">
        <h2>Add New Make</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="newMake">
                <Form.Label>New Make</Form.Label>
                <Form.Control
                    type="newMake"
                    value={newMake}
                    onChange={(e) => setnewMake(e.target.value)}
                />
            </Form.Group>
            
            <Button className="" block type="submit" disabled={!validateForm()}>
                Add
            </Button>

            <br></br>
        </Form>

        <h2>Makes List:</h2>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Make Name</th>
                    <th>Update?</th>
                    <th>Delete?</th>
                </tr>
            </thead>

            <tbody>
                <h5>Response</h5>
                {makes.map(el => {
                    return (
                        <tr key={el.id}>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>Update Button</td>
                        <td>Delete Button</td>
                    </tr>
                    );
                })}
            </tbody>
        </Table>

        
    </div>
  );
}
