import React, { Component } from 'react';
import { Container, Col, Row } from "react-bootstrap";

import CartDetails from '../../components/Checkout/CartDetails';
import CheckoutForm from '../../components/Checkout/CheckoutForm';
import './Checkout.css';

class Checkout extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            data : ""
		};
    
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col className="checkout-form" md="6">
                        <CheckoutForm />
                    </Col>


                    <Col className="cart-details pb-4" md="6">
                        <CartDetails />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Checkout;