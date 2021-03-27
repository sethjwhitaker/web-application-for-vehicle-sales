import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AddNewCar() {

    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");

    /*
    **************copied code from Register********************

    function handleSubmit(event) {
        event.preventDefault();
        // POST request using fetch()
        fetch(`${window.location.protocol}//${window.location.hostname}/users/register`, {
          
        // Adding method type
        method: "POST",
          
        // Adding body or contents to send
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: newEmail,
          password: newPassword
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

    function getVehicles() {
        fetch(`${window.location.protocol}//${window.location.hostname}/vehicles`, {

            headers: {
            "Content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log("data is:");
            console.log(data);

        });
    }*/

    return (
        <div className="container">
            {/*Section for adding new cars*/}

            <h2>Add New Vehicle</h2>
            <div className="VehicleForm">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="make">
                    <Form.Label>Make</Form.Label>
                    <Form.Control
                        type="make"
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group controlId="model">
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                        type="model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    </Form.Group>

                    {/*Additional groups will be added as needed */}

                    <Button block type="submit">Add</Button>
                </Form>
            </div>
        </div>
    )
}
