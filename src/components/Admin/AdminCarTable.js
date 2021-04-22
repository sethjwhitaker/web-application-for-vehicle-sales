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
    const [short_description, setShort_description] = useState(null);
    const [transmission, setTransmission] = useState(null);
    const [type, setType] = useState(null);
    const [year, setYear] = useState(null);

    //objects returned from api call
    const [makes, setMakes] = useState(null);
    const [types, setTypes] = useState(null);
    const [classes, setClasses] = useState(null);

    //loading variables
    const [makesLoading, setMakesLoading] = useState(true);
    const [typesLoading, setTypesLoading] = useState(true);
    const [classesLoading, setClassesLoading] = useState(true);

    //import makes
    useEffect(async () => {
        const response = await fetch(`${window.location.protocol}//${window.location.hostname}/makes`);
        const data = await response.json();
        setMakes(data);
        setMakesLoading(false);
    }, []);

    //import types
    useEffect(async () => {
        const response = await fetch(`${window.location.protocol}//${window.location.hostname}/types`);
        const data = await response.json();
        setTypes(data);
        setTypesLoading(false);
    }, []);

    //import classes
    useEffect(async () => {
        const response = await fetch(`${window.location.protocol}//${window.location.hostname}/classes`);
        const data = await response.json();
        setClasses(data);
        setClassesLoading(false);
    }, []);

    //api fetch call for vehicle list
    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setData(data);
        setLoading(false);
    }, [deleted]); //only rerender when deleted changes
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
    async function onDeleteConfirm(e) {
        console.log(e.target.value);

        // POST request using fetch()
        await fetch(`${window.location.protocol}//${window.location.hostname}/vehicles/${e.target.value}`, {
            
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
    async function onEditConfirm(e) {
        // POST request using fetch()
        await fetch(`${window.location.protocol}//${window.location.hostname}/vehicles/${editID}`, {
            
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
        setEditID(e.target.getAttribute('id'));
        setMake(e.target.getAttribute('make'));
        setType(e.target.getAttribute('editType'));
        setEditClass(e.target.getAttribute('editClass'));
        setModel(e.target.getAttribute('model'));
        setYear(e.target.getAttribute('year'));
        setPrice(e.target.getAttribute('price'));
        setExterior_color(e.target.getAttribute('exterior_color'));
        setInterior_color(e.target.getAttribute('interior_color'));
        setEngine(e.target.getAttribute('engine'));
        setTransmission(e.target.getAttribute('transmission'));
        setMileage(e.target.getAttribute('mileage'));
        setShort_description(e.target.getAttribute('short_description'));
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
                <p>Make sure to select a make, type, and class from dropdowns before submit.</p>
                <Form onSubmit={(e) => {onEdit(e)}}>
                    <Form.Group controlId="make">
                        <Form.Label>Make</Form.Label>
                        <Form.Control as="select"
                            onChange={(e) => setMake(e.target.value)}>
                                <option>-</option>
                                {makes.map((e, index) => {
                                    return (<option key={index} value={e.id}>{e.name}</option>)
                                })}    
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="type">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select"
                            onChange={(e) => setType(e.target.value)}>
                                <option>-</option>
                                {types.map((e, index) => {
                                    return (<option key={index} value={e.id}>{e.name}</option>)
                                })}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="editClass">
                        <Form.Label>Class</Form.Label>
                        <Form.Control as="select"
                            onChange={(e) => setEditClass(e.target.value)}>
                                <option>-</option>
                                {classes.map((e, index) => {
                                    return (<option key={index} value={e.id}>{e.name}</option>)
                                })}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="model">
                        <Form.Label>Model</Form.Label>
                        <Form.Control
                            type="model"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="year">
                        <Form.Label>Year</Form.Label>
                        <Form.Control
                            type="year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
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

                    <Form.Group controlId="exterior_color">
                        <Form.Label>Exterior Color</Form.Label>
                        <Form.Control
                            type="exterior_color"
                            value={exterior_color}
                            onChange={(e) => setExterior_color(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="interior_color">
                        <Form.Label>Interior Color</Form.Label>
                        <Form.Control
                            type="interior_color"
                            value={interior_color}
                            onChange={(e) => setInterior_color(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="engine">
                        <Form.Label>Engine</Form.Label>
                        <Form.Control
                            type="engine"
                            value={engine}
                            onChange={(e) => setEngine(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="transmission">
                        <Form.Label>Transmission</Form.Label>
                        <Form.Control
                            type="transmission"
                            value={transmission}
                            onChange={(e) => setTransmission(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="mileage">
                        <Form.Label>Mileage</Form.Label>
                        <Form.Control
                            type="mileage"
                            value={mileage}
                            onChange={(e) => setMileage(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="short_description">
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control
                            type="short_description"
                            value={short_description}
                            onChange={(e) => setShort_description(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
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
                                        editType={e.type}
                                        editClass={e.class}
                                        model={e.model}
                                        year={e.year}
                                        price={e.price}
                                        exterior_color={e.exterior_color}
                                        interior_color={e.interior_color}
                                        engine={e.engine}
                                        transmission={e.transmission}
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
