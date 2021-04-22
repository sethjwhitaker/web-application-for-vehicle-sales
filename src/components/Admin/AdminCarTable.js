import React, { useState, useEffect } from "react";
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AdminCarTable() {
    const url = `${window.location.protocol}//${window.location.hostname}/vehicles`;
    const [deleted, setDeleted] = useState(0);
    const [data, setData] = useState(null);
    const [deleteID, setDeleteID] = useState(null);
    const [editID, setEditID] = useState(null);
    const [editName, setEditName] = useState(null);
    const [newEditName, setNewEditName] = useState("");
    const [loading, setLoading] = useState(true);
    const [editClicked, setEditClicked] = useState(false);

    //variables for editing vehicle
    const [editClass, setEditClass] = useState(null);
    const [description, setDescription] = useState(null);
    const [engine, setEngine] = useState(null);
    const [exterior_color, setExterior_color] = useState(null);
    const [interior_color, setInterior_color] = useState(null);
    const [make, setMake] = useState(null);
    const [mileage, setMileage] = useState(null);
    const [model, setModel] = useState(null);
    const [price, setPrice] = useState(null);
    const [short_description, SetShort_description] = useState(null);
    const [transmission, setTransmission] = useState(null);
    const [type, setType] = useState(null);
    const [year, setYear] = useState(null);

    //api fetch call
    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setData(data);
        setLoading(false);
    }, [deleted]); //only rerender when deleted changes
    //empty array for onMount only

    //calls delete api with given id
    const onDelete = (e) => {
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
    }

    //calls edit api with given id
    const onEdit = (e) => {
        console.log(e.target.value);
    }

    const onEditClick = (e) => {
        setEditID(e.target.getAttribute('id'));
        setMake(e.target.getAttribute('make'));
        setType(e.target.getAttribute('type'));
        setEditClass(e.target.getAttribute('class'));
        setModel(e.target.getAttribute('model'));
        setYear(e.target.getAttribute('year'));
        setPrice(e.target.getAttribute('price'));
        setExterior_color(e.target.getAttribute('exterior_color'));
        setInterior_color(e.target.getAttribute('interior_color'));
        setEngine(e.target.getAttribute('engine'));
        setTransmission(e.target.getAttribute('transmission'));
        setMileage(e.target.getAttribute('mileage'));
        SetShort_description(e.target.getAttribute('short_description'));
        setDescription(e.target.getAttribute('description'));

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
                    <Form.Group controlId="make">
                        <Form.Label>Make</Form.Label>
                        <Form.Control
                            type="make"
                            value={make}
                            onChange={(e) => setMake(e.target.value)}
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

            //display full table
            <div className = "container-fluid"> 
                <h2>Car Table</h2>
                <div className="tablediv">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Vehicle ID</th>
                                <th>Make</th>
                                <th>Type</th>
                                <th>Class</th>
                                <th>Model</th>
                                <th>Year</th>
                                <th>Price</th>
                                <th>Exterior Color</th>
                                <th>Interior Color</th>
                                <th>Engine</th>
                                <th>Transmission</th>
                                <th>Mileage</th>
                                <th>Short Description</th>
                                <th>Full Description</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((e, index) => {
                            return (
                                <tr key={index} value={e.id}>

                                    <td>{e.id}</td>
                                    <td>{e.make}</td>
                                    <td>{e.type}</td>
                                    <td>{e.class}</td>
                                    <td>{e.model}</td>
                                    <td>{e.year}</td>
                                    <td>{e.price}</td>
                                    <td>{e.exterior_color}</td>
                                    <td>{e.interior_color}</td>
                                    <td>{e.engine}</td>
                                    <td>{e.transmission}</td>
                                    <td>{e.mileage}</td>
                                    <td>{e.short_description}</td>
                                    <td>{e.description}</td>
                                    <td>
                                        <Button 
                                        className="" 
                                        id={e.id} 
                                        make={e.make}
                                        type={e.type}
                                        class={e.class}
                                        model={e.model}
                                        year={e.year}
                                        price={e.price}
                                        exterior_color={e.exterior_color}
                                        interior_color={e.interior_color}
                                        engine={e.engine}
                                        transmision={e.transmission}
                                        mileage={e.mileage}
                                        short_description={e.short_description}
                                        description={e.description}
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
