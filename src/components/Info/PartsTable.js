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
                        <td>{this.props.prod_num}</td>
                    </tr>
                    <tr>
                        <td>Warranty:</td>
                        <td>{this.props.warranty}</td>
                    </tr>
                    <tr>
                        <td>Compatability:</td>
                        <td>{this.props.compatability}</td>
                    </tr>
                    <tr>
                        <td>Color:</td>
                        <td>{this.props.color}</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default PartsTable