import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



export default class Email extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <Table bordered className="table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th><h2>Email Dealership</h2></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Form className="form">
                                        <Form.Group>
                                            <Form.Control type="email" id="email" placeholder="Email Address*" required />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Control type="text" id="fName" placeholder="First name*" required/>
                                        </Form.Group>
                                        
                                        <Form.Group>
                                            <Form.Control type="text" id="lName" placeholder="Last name*" required/>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Control type="tel" id="number" placeholder="Phone number"/>
                                        </Form.Group>

                                        <Form.Group>
                                            <textarea className="form-control" id="message" rows="3" placeholder="Enter your message here*" />
                                        </Form.Group>

                                        <Button className="btn-dark" type="submit">Send</Button>
                                    </Form>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
}