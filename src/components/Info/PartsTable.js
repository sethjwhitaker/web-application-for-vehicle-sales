import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

class PartsTable extends Component {
    render() {
        return (
            <Table responsive bordered className="table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th colSpan="2"><h2>Parts Information</h2></th>
                    </tr>
                </thead>
                
                <tbody className="info-body">
                    <tr>
                        <td>Product #:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Warranty:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Compatability:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Color:</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default PartsTable