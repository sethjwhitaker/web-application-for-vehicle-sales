import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AddNewPart() {

    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="container">
            {/*Section for adding new parts*/}

            <h2>Add New Part</h2>
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
