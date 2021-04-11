import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AddClass() {
    const [newClass, setnewClass] = useState("");

    function validateForm() {
        return newClass.length > 0;
    }

    function handleSubmit(event) {

        event.preventDefault();
        // POST request using fetch()
        fetch(`${window.location.protocol}//${window.location.hostname}/classes`, {
          
        // Adding method type
        method: "POST",
          
        // Adding body or contents to send
        body: JSON.stringify({
          name: newClass,
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
        <h2>Add New Class</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="newClass">
                <Form.Label>New Class</Form.Label>
                <Form.Control
                    type="newClass"
                    value={newClass}
                    onChange={(e) => setnewClass(e.target.value)}
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
