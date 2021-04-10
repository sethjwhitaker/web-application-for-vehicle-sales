import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Makes() {
    const [newMake, setnewMake] = useState("");

    function validateForm() {
        return newMake.length > 0;
    }

    function getMakes() {
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

    function MyComponent() {
        useEffect(() => {
          getMakes();
        }, []);
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
        <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Make Name</Table.HeaderCell>
            <Table.HeaderCell>Update?</Table.HeaderCell>
            <Table.HeaderCell>Delete?</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
            <h5>Data</h5>
          {data.map(el => {
            return (
                <Table.Row key={el.id}>
                <Table.Cell>{el.id}</Table.Cell>
                <Table.Cell>
                  {el.name}
                </Table.Cell>
                <Table.Cell>Update Button</Table.Cell>
                <Table.Cell>Delete Button</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>

        <Table.Body>
            <h5>Response</h5>
          {response.map(el => {
            return (
              <Table.Row key={el.id}>
                <Table.Cell>{el.id}</Table.Cell>
                <Table.Cell>
                  {el.name}
                </Table.Cell>
                <Table.Cell>Update Button</Table.Cell>
                <Table.Cell>Delete Button</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

        
    </div>
  );
}
