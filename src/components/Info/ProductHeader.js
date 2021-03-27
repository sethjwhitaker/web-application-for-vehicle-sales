import React, {Component} from 'react';
import {Table, Row, Col } from 'react-bootstrap';


class ProductHeader extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="col-4">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th><h3>{ this.props.title_header }</h3></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>{ this.props.title }</p></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    
                    <Col className="col-4">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th><h3>{ this.props.mileage_header }</h3></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>{ this.props.mileage }</p></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
    
                    <Col className="col-4">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th><h3>{ this.props.price_header }</h3></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>{ this.props.price }</p></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ProductHeader