import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'

const Test1 = (props) => {
    const [makes, setMakes] = useState([{id: 1, name: 'test1'}, {id: 2, name: 'test2'}])
    const [loading, setloading] = useState("true")
    const [deleted, setdeleted] = useState(0)
    const [idToDelete, setidToDelete] = useState(null)

    useEffect(async () => {
        const response = await fetch(`${window.location.protocol}//${window.location.hostname}/makes`, {
            headers: {
            "Content-type": "application/json"
            }
        });
        const data = await response.json();
        setMakes(data);
        setloading('false');
    }, [deleted])

    function handleDelete() {
        // POST request using fetch()
        fetch(`${window.location.protocol}//${window.location.hostname}/makes/${idToDelete}`, {
            
        // Adding method type
        method: "DELETE",
            
        // Adding body or contents to send
        body: JSON.stringify({
            id: idToDelete
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
        <div className="tablediv">
            <Table>
                <thead>
                    <tr>
                        <th>Make ID</th>
                        <th>Make Name</th>
                        <th>New Make Name</th>
                        <th>Submit</th>
                    </tr>
                </thead>
                <tbody>
                    {/*loop to display each make on a row*/}
                    {makes.map((e) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>
                                <Form onSubmit={handleDelete}>
                                    <Button 
                                        className=""
                                        value={e.id} 
                                        onClick={e => {
                                            setidToDelete(e.target.value);
                                        }} 
                                        block 
                                        type="submit">
                                        Edit
                                    </Button>
                                </Form>
                            </td>
                            <td>
                                <Form onSubmit={handleDelete}>
                                    <Button 
                                        className=""
                                        value={e.id} 
                                        onClick={e => {
                                            setidToDelete(e.target.value), setdeleted(deleted+1);
                                        }} 
                                        block 
                                        type="submit">
                                        Delete
                                    </Button>
                                </Form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Test1;