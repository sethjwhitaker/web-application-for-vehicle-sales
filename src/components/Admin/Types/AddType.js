import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AddType() {
    const [newType, setnewType] = useState("");

    function validateForm() {
        return newType.length > 0;
    }

    function handleSubmit(event) {

        event.preventDefault();
        // POST request using fetch()
        fetch(`${window.location.protocol}//${window.location.hostname}/types`, {
          
        // Adding method type
        method: "POST",
          
        // Adding body or contents to send
        body: JSON.stringify({
          name: newType,
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
        <h2>Add New Type</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="newType">
                <Form.Label>New Type</Form.Label>
                <Form.Control
                    type="newType"
                    value={newType}
                    onChange={(e) => setnewType(e.target.value)}
                />
            </Form.Group>
            
            <Button className="" block type="submit" disabled={!validateForm()}>
                Add
            </Button>

            <br></br>
        </Form>        
    </div>
  );
}
