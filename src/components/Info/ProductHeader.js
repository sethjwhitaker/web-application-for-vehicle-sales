import React, {Component} from 'react';
import {Table, Row, Col } from 'react-bootstrap';


class ProductHeader extends Component {

    headerType(props) {
        const prod_type = props.prod;

        if (prod_type == "vehicle") {
            return (
                <div>
                    <Row>
                        <Col md='4'>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th><h3>{ this.props.title_header }</h3></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><p>{ this.props.year } {this.props.make} {this.props.model}</p></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        
                        <Col md='4'>
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
        
                        <Col md='4'>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th><h3>{ this.props.price_header }</h3></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><p>${ this.props.price }</p></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
            )
        }

        else {
            return (
                <div>
                    <Row>
                        <Col md='4'>
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
                        
                        <Col md='4'>
                            
                        </Col>
        
                        <Col md='4'>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th><h3>{ this.props.price_header }</h3></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><p>${ this.props.price }</p></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
            )
            
        }
        
    }

    render() {
        return (
            <div>
                {this.headerType(this.props)}
            </div>
        )
    }
}

export default ProductHeader