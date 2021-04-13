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
                        <td>Class:</td>
                        <td>{this.props.class}</td>
                    </tr>
                    <tr>
                        <td>Type:</td>
                        <td>{this.props.type}</td>
                    </tr>
                    <tr>
                        <td>Engine:</td>
                        <td>{this.props.engine}</td>
                    </tr>
                    <tr>
                        <td>Transmission:</td>
                        <td>{this.props.transmission}</td>
                    </tr>
                    <tr>
                        <td>MPG:</td>
                        <td>{this.props.MPG}</td>
                    </tr>
                    <tr>
                        <td>Exterior color:</td>
                        <td>{this.props.exterior_color}</td>
                    </tr>
                    <tr>
                        <td>Interior color:</td>
                        <td>{this.props.interior_color}</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default VehicleTable