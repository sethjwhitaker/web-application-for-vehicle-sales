import React, { useState, useEffect } from "react";
import 'regenerator-runtime/runtime';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function TestAdd() {
    const [newUserID, setNewUserID] = useState("");
    const [newSalesItems, setNewSalesItems] = useState([]);
    const [newStatus, setNewStatus] = useState("");
    const [newDate, setNewDate] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newVehicleID, setNewVehicleID] = useState("");
    const [newPartID, setNewPartID] = useState("");
    const [newQuantity, setNewQuantity] = useState(1);

    function validateForm() {
        return newStatus.length > 0 && newDate.length > 0 && newAddress.length > 0 && newDate.length > 0 && newVehicleID.length > 0;
    }

    function handleSubmit(event) {

        newSalesItems.push([newVehicleID]);

        event.preventDefault();
        // POST request using fetch()
        fetch(`${window.location.protocol}//${window.location.hostname}/sale_items`, {
          
        // Adding method type
        method: "POST",
          
        // Adding body or contents to send
        body: JSON.stringify({
          sale_items: newSalesItems,
          status: newStatus,
          date: newDate,
          address: newAddress
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

            <h2>Add New Sale</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="newVehicleID">
                    <Form.Label>Vehicle ID</Form.Label>
                    <Form.Control
                        type="newVehicleID"
                        value={newVehicleID}
                        onChange={(e) => setNewVehicleID(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="newPartID">
                    <Form.Label>Part ID</Form.Label>
                    <Form.Control
                        type="newPartID"
                        value={newPartID}
                        onChange={(e) => setNewPartID(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="newQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type="newQuantity"
                        value={newQuantity}
                        onChange={(e) => setNewQuantity(e.target.value)}
                    />
                </Form.Group>
                    <Form.Group controlId="newStatus">
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                        type="newStatus"
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="newDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="newDate"
                        value={newDate}
                        onChange={(e) => setNewDate(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="newAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="newAddress"
                        value={newAddress}
                        onChange={(e) => setNewAddress(e.target.value)}
                    />
                </Form.Group>

                <Button className="" block type="submit" disabled={!validateForm()}>
                    Add
                </Button>

                <br></br>
            </Form>
        </div>
    )
}
