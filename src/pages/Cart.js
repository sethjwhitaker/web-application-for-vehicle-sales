import React, { Component } from 'react';
import Header from '../components/Header';
import {Link} from "react-router-dom";
import equal from "fast-deep-equal";
import { Card, Button, Container} from 'react-bootstrap'

class Cart extends Component {
    state = {
        cartItems: [],
        total: 0
    }
        
    componentDidMount() {
        // TODO: Check if logged in. If not, redirect to login page.

        console.log(this.props.userData);
        this.props.getCart();
    }

    componentDidUpdate(prevProps, prevState) {
        if(!equal(this.props.cart, prevProps.cart)) {
            if(this.props.cart.sale_items) {
                this.populateTable();
            }
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
        <Card style={{ width: '18rem' }}>
            
            <Card.Body>
                <Card.Title>{name}</Card.Title>

                <Card.Text>{"$" + item.price.toFixed(2)}</Card.Text>
                <Card.Text>Quantity: {quantity}</Card.Text>

                <Button variant="danger" onClick={(e) => this.removeCartItem(item.id, table)}>Remove</Button>
            </Card.Body>
        </Card>
        );
    }


    async removeCartItem(id, table) {
        console.log(`Remove ${table} ${id}`);

        const body = {};

        if(table === "parts") {
            body.part_id = id;
        } else if (table === "vehicles") {
            body.vehicle_id = id;
        }

        const options = {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };
        
        try {
            
            const response = await fetch(`${window.location.protocol}//${window.location.hostname}/sales/${this.props.cart.id}/remove_item`, options);
            const data = await response.json();

            this.props.getCart();
            
        } catch(e) {
            console.error(e);
        }
    }

    render() {
        return(
            <div>
                <Header />
                <Container fluid="md">
                    <h2>Cart</h2>
                    {
                        this.state.cartItems.map(item => {
                            return this.renderCartItem(item.item, item.quantity);
                        })
                    }
                    <br></br>
                    Total: {"$" + this.state.total.toFixed(2)}
                    <br></br>
                    <Link to="/checkout">Checkout</Link>
                </Container>
            </div>        
        )   
    }
}

export default Cart;