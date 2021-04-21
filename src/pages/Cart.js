import React, { Component } from 'react';
import Header from '../components/Header';
import axios from "axios";

class Cart extends Component {
    state = {
        cart: {},
        cartItems: []
    }
        
    componentDidMount() {
        // TODO: Check if logged in. If not, redirect to login page.

        console.log(this.props.userData);
        this.getCart();
    }
    
    async getCart() {
        const options = {
            method: 'GET'
        }

        try {
            const response = await fetch(`${window.location.protocol}//${window.location.hostname}/cart`, options);
            const data = await response.json();
            if(data.id) { // there is a cart
                this.setState({cart:data});
                console.log(data);
            } else {
                this.createCart();
            }
        } catch(e) {
            console.error(e);
        }
    }

    async createCart() {
        console.log("Creating Cart");
        console.log(this.props.userData);

        const options = {
            method: 'POST',
            body: JSON.stringify({
                user_id: this.props.userData.user_id,
                sale_items: []
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };

        try {
            const response = await fetch(`${window.location.protocol}//${window.location.hostname}/sales`, options);
            const data = await response.json();
            console.log(data);
            // check message
        } catch(e) {
            console.error(e);
        }
    }

    async populateItem(id, table, q) {
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
                ] 
            });
            console.log(data);
            
        } catch(e) {
            console.error(e);
        }
    }

    populateTable() {
        const cart = this.state.cart.sale_items;
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
            <p>{name}</p>
            <p>{item.price}</p>
            <p>{quantity}</p>
            <button onClick={(e) => this.removeCartItem(item.id, table)}>Remove</button>
        </div>
        );
    }


    removeCartItem(id, table) {

    }

    render() {
        return(
            <div>
                <Header />
                <h2>Cart</h2>
                
            </div>        
        )   
    }
}

export default Cart;