import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table';
import Test from './Test';

const Test1 = (props) => {
    /*const [makes, setMakes] = useState([{id: 1, name: 'test1'}, {id: 2, name: 'test2'}])
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
*/
    return (
        <div></div>
    )
}

export default Test1;