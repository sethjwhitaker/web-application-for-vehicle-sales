import React, { useState, useEffect } from "react";
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TestAdd from "./TestAdd";

export default function Test() {
    const url = `${window.location.protocol}//${window.location.hostname}/sale_items`;
    const [deleted, setDeleted] = useState(0);
    const [data, setData] = useState(null);
    const [editID, setEditID] = useState(null);
    const [newEditName, setNewEditName] = useState("");
    const [loading, setLoading] = useState(true);
    const [editClicked, setEditClicked] = useState(false);
    const [userID, setUserID] = useState(null);
    const [saleItems, setSaleItems] = useState(null);
    const [status, setStatus] = useState(null);
    const [date, setDate] = useState(null);
    const [address, setAddress] = useState(null);

    const [editSaleItems, setEditSaleItems] = useState(null);
    const [editStatus, setEditStatus] = useState(null);
    const [editDate, setEditDate] = useState(null);
    const [editAddress, setEditAddress] = useState(null);

    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
    }, [deleted]); //only rerender when deleted changes
    //empty array for onMount only

    //calls delete api with given id
    const onDelete = (e) => {
        setDeleted(deleted + 1);
        console.log(e.target.value);
    }

    //calls delete api with given id
    const onEdit = (e) => {
        console.log(editSaleItems);
        console.log(editStatus);
        console.log(editDate);
        console.log(editAddress);
    }

    const onEditClick = (e) => {
        setUserID(e.target.getAttribute('user_id'));
        setSaleItems(e.target.getAttribute('salesItems'));
        setStatus(e.target.getAttribute('status'));
        setDate(e.target.getAttribute('date'));
        setAddress(e.target.getAttribute('address'));
        console.log(userID);
        console.log(saleItems);
        console.log(status);
        console.log(date);
        console.log(address);
        setEditClicked(true);
    }

    return (
        <div>
            <TestAdd />
            {/*if loading is true, display loading
            if editClicked is true, display edit form
            else display full table*/}
            {loading ? 

            //render loading
            <div className = "container-fluid"> ...loading</div> 
            
            //if editClicked is true...
            : editClicked ? 

            //render Edit form
            <div className = "container-fluid"> 
                <h2>Edit ID {userID}</h2>
                <Form onSubmit={(e) => {onEdit(e)}}>
                    <Form.Group controlId="editSaleItems">
                        <Form.Label>New Sales Items</Form.Label>
                        <Form.Control
                            type="editSaleItems"
                            value={editSaleItems}
                            onChange={(e) => setEditSaleItems(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="editStatus">
                        <Form.Label>New Status</Form.Label>
                        <Form.Control
                            type="editStatus"
                            value={editStatus}
                            onChange={(e) => setEditStatus(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="editDate">
                        <Form.Label>New Date</Form.Label>
                        <Form.Control
                            type="editDate"
                            value={editDate}
                            onChange={(e) => setEditDate(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="editAddress">
                        <Form.Label>New Address</Form.Label>
                        <Form.Control
                            type="editAddress"
                            value={editAddress}
                            onChange={(e) => setEditAddress(e.target.value)}
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
                <h2>Makes List</h2>
                <p>Note: Makes cannot be deleted if they exist in either sales history or current inventory.</p>
                <div className="tablediv">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Sale Items</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Address</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*loop to display each make on a row*/}
                            {data.map((e) => (
                                <tr key={e.user_id}>
                                    <td>{e.user_id}</td>
                                    <td>{e.sale_items}</td>
                                    <td>{e.status}</td>
                                    <td>{e.date}</td>
                                    <td>{e.address}</td>
                                    <td>
                                        <Button
                                        className=""
                                        user_id={e.user_id}
                                        salesItems={e.sale_items}
                                        status={e.status} 
                                        date={e.date}
                                        address={e.address}
                                        onClick={(e) => {
                                                onEditClick(e)}
                                            }
                                            block
                                            type="submit">
                                            Edit
                                        </Button>
                                    </td>
                                    <td>
                                        <Button
                                        className=""
                                        value={e.user_id} 
                                        onClick={(e) => {
                                                onDelete(e)}
                                            }
                                            block 
                                            type="submit">
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))} 
                        </tbody>
                    </Table>
                </div>
            </div>}
        </div>
    )
}
