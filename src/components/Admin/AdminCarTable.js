import React from 'react'
import Table from 'react-bootstrap/Table'
import styles from "./admin.css"

export default function AdminCarTable() {
    return (
        <div className="tablediv">
            {/*Display full inventory of cars*/}
            {/*Alternatively, we can reuse the home page car display
            and add in delete/update functionality*/}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Test1</th>
                        <th>Test2</th>
                        <th>Test3</th>
                        <th>Test4</th>
                        <th>Delete?</th>
                    </tr>
                </thead>
                <tbody>                                        
                    {/*foreach loop to display car inventory here*/}
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
