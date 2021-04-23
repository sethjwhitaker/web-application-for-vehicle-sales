import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AddNewPart() {

    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [short_description, setShort_description] = useState("");
    const [warranty, setWarranty] = useState("");
    const [compatibility, setCompatibility] = useState("");
    const [color, setColor] = useState("");
    const [product_id, setProduct_id] = useState("");

    //only allows for button press once all required fields are filled out
    function validateForm() {
        return price.length > 0 && short_description.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        // POST request using fetch()
        fetch(`${window.location.protocol}//${window.location.hostname}/parts`, {
        
        // Adding method type
        method: "POST",
        
        // Adding body or contents to send
        body: JSON.stringify({
            price: price,
            quantity: quantity,
            short_description: short_description,
            warranty: warranty,
            compatibility: compatibility,
            color: color,
            product_id: product_id
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

    window.alert("Add Request Sent");
    }

    return (
        <div className="container">

            <h2>Add New Part</h2>
            <div className="VehicleForm">
                <Form onSubmit={(e) => {handleSubmit(e)}}>
                        
                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="quantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="short_description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="short_description"
                            value={short_description}
                            onChange={(e) => setShort_description(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="warranty">
                        <Form.Label>Warranty</Form.Label>
                        <Form.Control
                            type="warranty"
                            value={warranty}
                            onChange={(e) => setWarranty(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="compatibility">
                        <Form.Label>Compatibility</Form.Label>
                        <Form.Control
                            type="compatibility"
                            value={compatibility}
                            onChange={(e) => setCompatibility(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="color">
                        <Form.Label>Color</Form.Label>
                        <Form.Control
                            type="text"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="product_id">
                        <Form.Label>Product ID</Form.Label>
                        <Form.Control
                            type="product_id"
                            value={product_id}
                            onChange={(e) => setProduct_id(e.target.value)}
                        />
                    </Form.Group>
                    
                    <Button variant="success" className="" block type="submit" disabled={!validateForm()}>
                        Submit
                    </Button>
                </Form>   
            </div>
        </div>
                        
        )
    }

