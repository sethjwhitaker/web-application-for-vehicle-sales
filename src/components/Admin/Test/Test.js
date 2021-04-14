import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'

const Test = (props) => {
    const [makes, setMakes] = useState([{id: 1, name: 'test1'}, {id: 2, name: 'test2'}])
    const [makes2, setMakes2] = useState([{id: 3, name: 'test3'}, {id: 4, name: 'test4'}])
    const [loading, setloading] = useState("true")
    const [deleted, setdeleted] = useState(0)
    const [idToDelete, setidToDelete] = useState(null)

    useEffect(() => {
        const data = makes2;
        setMakes(data);
        setloading('false');
    }, [deleted])

    function handleDelete(e) {
        e.preventDefault();
        console.log(e);
        console.log("ID to delete: " + idToDelete);
        console.log("Deleted: " + deleted);
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
                    {props.makes.map((e) => (
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

export default Test;