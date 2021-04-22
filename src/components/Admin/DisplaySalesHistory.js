import React, { useState, useEffect } from "react";
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function DisplaySalesHistory() {
    const url = `${window.location.protocol}//${window.location.hostname}/sales`;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleted, setDeleted] = useState(0);
    const [reload, setReload] = useState(0);
    const [data1, setData1] = useState([{
        "id": 4,
        "user_id": 4,
        "status": "in_cart",
        "date": "2021-04-19T13:08:41.000Z",
        "address": null,
        "sale_items": [
            {
                "vehicle_id": 14,
                "part_id": null,
                "quantity": 1
            }
        ]
    }]);
    //variables for editing vehicle
    const [id, setID] = useState(null);
    const [address, setAddress] = useState(null);
    const [date, setDate] = useState(null);
    const [status, setStatus] = useState(null);
    const [user_id, setUser_id] = useState(null);

    //api fetch call for part list
    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setData(data);
        setLoading(false);
    }, [deleted, reload]); //only rerender when deleted changes
    //empty array for onMount only

    useEffect(async () => {
        const response = await fetch(`${window.location.protocol}//${window.location.hostname}/sale_items`);
        const data = await response.json();
        console.log(data);
    }, [deleted, reload]);

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
        fetch(`${window.location.protocol}//${window.location.hostname}/sales/${e.target.value}`, {
            
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
        fetch(`${window.location.protocol}//${window.location.hostname}/sales/${id}`, {
            
        // Adding method type
        method: "PUT",
            
        // Adding body or contents to send
        body: JSON.stringify({
            id: id,
            address: address,
            date: date,
            status: status,
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
        setAddress(e.target.getAttribute('address'));
        setDate(e.target.getAttribute('date'));
        setStatus(e.target.getAttribute('status'));
        
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
                <h2>Edit ID {id}</h2>
                <p>Make sure to select a status</p>
                <Form onSubmit={(e) => {onEdit(e)}}>

                    <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select"
                            type="status"
                            onChange={(e) => setStatus(e.target.value)}>
                                <option>-</option>
                                <option>in_cart</option>
                                <option>processing</option>
                                <option>complete</option>
                                <option>canceled</option>
                        </Form.Control>
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

            <div className="tablediv">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sale ID</th>
                            <th>User ID</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Address</th>
                            <th>Sale Quantity</th>
                            <th>Sale Part ID</th>
                            <th>Sale Vehicle ID</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data1.map((e, index) => {
                            return (
                                <tr key={index} value={e.id}>

                                    <td>{e.id}</td>
                                    <td>{e.user_id}</td>
                                    <td>{e.date}</td>
                                    <td>{e.status}</td>
                                    <td>{e.address}</td>
                                    <td>{e.sale_items[index].quantity}</td>
                                    <td>{e.sale_items[index].part_id}</td>
                                    <td>{e.sale_items[index].vehicle_id}</td>
                                    <td>
                                        <Button 
                                        className="" 
                                        id={e.id} 
                                        address={e.address}
                                        date={e.date}
                                        status={e.status}
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
            </div>}
        </div>
    )
}
