import React, { useState, useEffect } from "react";
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AdminPartsTable() {
    const url = `${window.location.protocol}//${window.location.hostname}/parts`;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleted, setDeleted] = useState(0);
    const [reload, setReload] = useState(0);
    const [editClicked, setEditClicked] = useState(false);

    //variables for editing vehicle
    const [id, setID] = useState(null);
    const [price, setPrice] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [short_description, setShort_description] = useState(null);
    const [warranty, setWarranty] = useState(null);
    const [compatibility, setCompatibility] = useState(null);
    const [color, setColor] = useState(null);
    const [product_id, setProduct_id] = useState(null);

    //api fetch call for part list
    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
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
        fetch(`${window.location.protocol}//${window.location.hostname}/vehicles/${e.target.value}`, {
            
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

        window.alert("Delete Request Sent");
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
        fetch(`${window.location.protocol}//${window.location.hostname}/vehicles/${editID}`, {
            
        // Adding method type
        method: "PUT",
            
        // Adding body or contents to send
        body: JSON.stringify({
            id: editID,
            make_id: make,
            type_id: type,
            class_id: editClass,
            model: model,
            year: year,
            price: price,
            exterior_color: exterior_color,
            interior_color: interior_color,
            engine: engine,
            transmission: transmission,
            mileage: mileage,
            short_description: short_description,
            description: description

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

    const onEditClick = (e) => {
        setID(e.target.getAttribute('id'));
        setPrice(e.target.getAttribute('price'))
        setQuantity(e.target.getAttribute('quantity'))
        setShort_description(e.target.getAttribute('short_description'))
        setWarranty(e.target.getAttribute('warranty'))
        setCompatibility(e.target.getAttribute('compatibility'))
        setColor(e.target.getAttribute('color'))
        setProduct_id(e.target.getAttribute('product_id'))
        
        setEditClicked(true);
    }

    return (
        <div>
            {/*if loading is true, display loading
            if editClicked is true, display edit form
            else display full table*/}
            {loading ? 

                //render loading
                <div className = "container-fluid">loading...</div> 

                //if editClicked is true...
                : editClicked ? 

                //render Edit form
                <div className = "container-fluid"> 
                    <h2>Edit ID {editID}</h2>
                    <Form onSubmit={(e) => {onEdit(e)}}>
                        
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
                                type="color"
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

                <div className = "container-fluid"> 
                    <h2>Part Table</h2>
                    <Button className="" onClick={(e) =>            {setReload(reload + 1)}} block type="submit">
                        Reload Table
                    </Button>
                    <div className="tablediv">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Part ID</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Short Description</th>
                                    <th>Warranty</th>
                                    <th>Compatibility</th>
                                    <th>Color</th>
                                    <th>Product ID</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            {data.map((e, index) => {
                                return (
                                    <tr key={index} value={e.id}>

                                        <td>{e.id}</td>
                                        <td>{e.price}</td>
                                        <td>{e.quantity}</td>
                                        <td>{e.short_description}</td>
                                        <td>{e.warranty}</td>
                                        <td>{e.compatibility}</td>
                                        <td>{e.color}</td>
                                        <td>{e.product_id}</td>
                                        <td>
                                            <Button 
                                            className="" 
                                            id={e.id} 
                                            price={e.price}
                                            quantity={e.quantity}
                                            short_description={e.short_description}
                                            warranty={e.warranty}
                                            compatibility={e.compatibility}
                                            color={e.color}
                                            product_id={e.product_id}
                                            block
                                            type="submit"
                                            onClick={(e) => {
                                                onEditClick(e)}
                                            }>
                                                Edit
                                            </Button>
                                        </td>
                                        <td>
                                            <Button 
                                            className="" 
                                            value={e.id} 
                                            block 
                                            type="submit"
                                            onClick={(e) => {
                                                onDelete(e)}
                                            }>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>)
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>}
        </div>
    )
}
