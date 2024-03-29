import React, { Component } from 'react';
import { Card, ButtonGroup, Button, Modal} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";


class Cards extends Component {

    state = {
        mIsOpen: false
      };

    openModal = () => this.setState({ mIsOpen: true });
    closeModal = () => this.setState({ mIsOpen: false });

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
        
        if(this.props.cartId) {
            try {
            
                const response = await fetch(`${window.location.protocol}//${window.location.hostname}/sales/${this.props.cartId}/add_item`, options);
                const data = await response.json();

                if(response.status == 401) this.openModal();
                
            } catch(e) {
                console.error(e);
            }
        } else {
            this.openModal();
            console.log("There is no cart!");
            
        }
        
    }

    renderPart() {
        return (
            <Card.Body>
                <Card.Text>
                    {this.props.car.short_description}<br />
                    {"$" + this.props.car.price.toFixed(2)}
                    
                </Card.Text>

                <ButtonGroup vertical>
                    <LinkContainer to={`/part/${this.props.car.id}`}><Button>More Info</Button></LinkContainer>
                    <Button variant="primary" onClick={(e) => {this.addToCart(this.props.car.id, "parts")}}>Add to Cart</Button>
                    <Button variant="primary" >Compare</Button>
                </ButtonGroup>

            </Card.Body>
        );
    }

    renderCar() {

        const compareClicked = (car)=>{
            if(localStorage.getItem('localcar1')){
                if(localStorage.getItem('localcar2')){
                var localcar3 = car;
                localStorage.setItem('localcar3', JSON.stringify(localcar3));
                }else{
                    var localcar2 = car;
                    localStorage.setItem('localcar2', JSON.stringify(localcar2));
                }

            }else{
                var localcar1 = car;
                localStorage.setItem('localcar1', JSON.stringify(localcar1));
            }
            
            var turnlocalcar = localStorage.getItem('localcar');
            console.log('retrievedObject: ', JSON.parse(turnlocalcar));
            console.log('retrievedObject: ', car);

        }

        return (
            <Card.Body>
                <Card.Text>
                    Make: {this.props.car.make}<br />
                    Model: {this.props.car.model}<br/>
                    Type: {this.props.car.type} <br/>
                    Color: {this.props.car.exterior_color}<br />
                    Year: {this.props.car.year}<br />
                    {"$" + this.props.car.price.toFixed(2)}<br />
                    {this.props.car.short_description}
                </Card.Text>

                <ButtonGroup vertical>
                    <LinkContainer to={`/car/${this.props.car.id}`}><Button variant="primary">More Info</Button></LinkContainer>
                    <Button variant="primary" onClick={(e) => {this.addToCart(this.props.car.id, "vehicles")}}>Add to Cart</Button>
                    <Button variant="primary" onClick={() => compareClicked(this.props.car)} >Compare</Button>
                </ButtonGroup>
            </Card.Body>
        );
    }

    render() {
        
        return (
            <div>
                <Card style={{ width: '12em', height: '30em' }}>
                    <Card.Img variant="top" src="https://www.linkpicture.com/q/LPic604691ad669e8533277294.jpg" />
                    {this.props.isCar ? this.renderCar() : this.renderPart()}
                </Card>
                <Modal show={this.state.mIsOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Unable to Add to Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please Login to add to cart</Modal.Body>
                    <Modal.Footer>
                        <LinkContainer to="/login" ><Button variant="primary">Login</Button></LinkContainer>
                        <Button variant="secondary" onClick={this.closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Cards