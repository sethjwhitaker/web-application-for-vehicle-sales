import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

class VehicleTable extends Component {
    render() {
        return (
            <Table responsive bordered className="table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th colSpan="2"><h2>Vehicle Information</h2></th>
                    </tr>
                </thead>
                
                <tbody className="info-body">
                    <tr>
                        <td>Engine:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Transmission:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>MPG:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Exterior color:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Interior color:</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default VehicleTable