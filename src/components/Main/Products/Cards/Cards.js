import React, { Component } from 'react';
import { Card, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";


class Cards extends Component {

    async addToCart(id, table) {
        console.log(`Add ${table} ${id} to cart`);

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
            
            const response = await fetch(`${window.location.protocol}//${window.location.hostname}/sales/${this.props.cartId}/add_item`, options);
            const data = await response.json();
            
        } catch(e) {
            console.error(e);
        }
    }

    renderPart() {
        return (
            <Card.Body>
                <Card.Text>
                    {this.props.car.short_description}<br />
                    {"$" + this.props.car.price.toFixed(2)}
                    
                </Card.Text>

                <Link to={`/part/${this.props.car.id}`}><Button variant="primary">More Info</Button></Link>
                <Button variant="primary" onClick={(e) => {this.addToCart(this.props.car.id, "parts")}}>Add to Cart</Button>
                <Button variant="primary">Compare</Button>
            </Card.Body>
        );
    }

    renderCar() {
        return (
            <Card.Body>
                <Card.Text>
                    Make: {this.props.car.make}<br />
                    Model: {this.props.car.model}<br/>
                    Color: {this.props.car.exterior_color}<br />
                    Year: {this.props.car.year}<br />
                    {"$" + this.props.car.price.toFixed(2)}<br />
                    {this.props.car.short_description}
                </Card.Text>

                <Link to={`/car/${this.props.car.id}`}><Button variant="primary">More Info</Button></Link>
                <Button variant="primary" onClick={(e) => {this.addToCart(this.props.car.id, "vehicles")}}>Add to Cart</Button>
                <Button variant="primary">Compare</Button>
            </Card.Body>
        );
    }

    render() {

        
        return (
            <div>
                <Card style={{ width: '12rem', height: '30rem' }}>
                    {this.props.isCar ? this.renderCar() : this.renderPart()}
                </Card>
            </div>
        )
    }
}

export default Cards