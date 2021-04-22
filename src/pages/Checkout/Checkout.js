import React, { Component } from 'react';
import { Container, Col, Row, Card } from "react-bootstrap";
import CartDetails from '../../components/Checkout/CartDetails';
import CheckoutForm from '../../components/Checkout/CheckoutForm';
import './Checkout.css';

class Checkout extends Component {

    state = {
        cart: [],
        total: 0
    }

    componentDidMount() {
        fetch(`${window.location.protocol}//${window.location.hostname}/cart`, {
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log("data is:");
            console.log(data);
            this.setState({cart : data});
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className="checkout-form" md="6">
                        <CheckoutForm />
                    </Col>


                    <Col className="cart-details pb-4" md="6">
                        <h2 className="checkout-title">Order Summary</h2>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Checkout;