import React, { Component } from 'react';
import { Container, Col, Row, Card } from "react-bootstrap";
import CartDetails from '../../components/Checkout/CartDetails';
import CheckoutForm from '../../components/Checkout/CheckoutForm';
import './Checkout.css';

class Checkout extends Component {

    state = {
        cartItems: [],
        total: 0
    }

    componentDidMount() {

        if(this.props.cart.sale_items) {
            this.populateTable();
        }
    }

    async getItem(id, table, q) {
        try {
            const options = {method: 'GET'};
            const response = await fetch(`${window.location.protocol}//${window.location.hostname}/${table}/${id}`, options);
            const data = await response.json();

            this.setState({ 
                cartItems: [
                    ...this.state.cartItems,
                    {
                        item: data,
                        quantity: q
                    }
                ],
                total: this.state.total + parseInt(q)*parseFloat(data.price)
            });
            console.log(data);
            
        } catch(e) {
            console.error(e);
        }
    }

    populateTable() {
        const cart = this.props.cart.sale_items;
        this.setState({cartItems: []});
        for(let i = 0; i < cart.length; i++) {
            if(cart[i].vehicle_id) {
                this.getItem(cart[i].vehicle_id, "vehicles", cart[i].quantity);
            } else if(cart[i].part_id) {
                this.getItem(cart[i].part_id, "parts", cart[i].quantity);
            } else {
                console.log("Cart: Something went wrong while populating table with: ");
                console.log(cart[i]);
            }
        }
    }

    // This can be abstracted into its own component
    renderCartItem(item, quantity) {
        let name, table;

        if(item.make) { // is a vehicle
            name = `${item.make} ${item.model}`;
            table = 'vehicles';
        } else {
            name = item.short_description;
            table = 'parts';
        }
        return (
            <div>
                <Card style={{ width: '80%' }}>
                    
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>

                        <Card.Text>{"$" + item.price.toFixed(2)}</Card.Text>
                        <Card.Text>Quantity: {quantity}</Card.Text>
                    </Card.Body>
                </Card>
                <br />
            </div>
        );
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
                        {
                            this.state.cartItems.map(item => {
                                return this.renderCartItem(item.item, item.quantity);
                            })
                        }
                        <br></br>
                        <h3>Total: {"$" + this.state.total.toFixed(2)}</h3>
                        <br></br>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Checkout;