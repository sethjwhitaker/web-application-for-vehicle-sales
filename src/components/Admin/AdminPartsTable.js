import React from 'react'
import Table from 'react-bootstrap/Table'
import styles from "./admin.css"

export default function AdminPartsTable() {
    return (
        <div className="tablediv">
            {/*Display full inventory of parts*/}
            {/*Same option to display differently as above*/}
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
                    {/*foreach loop to display parts inventory here*/}
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
