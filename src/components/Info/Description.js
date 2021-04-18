import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';

class Description extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <Table responsive bordered className="table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th><h2>Description</h2></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>{ this.props.desc }</p></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
}
export default Description