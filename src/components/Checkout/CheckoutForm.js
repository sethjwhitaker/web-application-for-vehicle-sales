import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FinanceCalculator from './FinanceCalculator';

class CheckoutForm extends Component {
    /*
    constructor(props) {
		super(props);
		
		this.state = {
			paymentSelection: 'credit',

		}
	}
    */

    state = {
        paymentSelection: 'credit',
        first_name = "",
        last_name = "",
        address = "",
        city = "",
        us_state = "",
        zip = ""
    };

    handleChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    handleSubmit() {
        this.full_address = this.state.address + ", " + this.state.city + ", " + this.state.us_state + ", " + this.state.zip;
        console.log(this.full_address);
    }

    toggleContent = (event) => {
		event.preventDefault();
		this.setState({
			paymentSelection: event.target.value,
		})
	}

    switchContent = (value) => {
        switch(value) {
            case 'credit':
                return <div>  
                    
                </div>

            case 'finance':
                return <div>
                    <FinanceCalculator
                    total = {this.props.total} />
                    <br /><br />
                </div>
        
            default:
                return null;
        }
    }

    render() {
        const { paymentSelection } = this.state;

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <h2 className="checkout-title mb-3">Contact Information</h2>
    
                <Form.Group>
                    <Form.Control required type="email" name="email" id="email" placeholder="Email" />
                </Form.Group>

                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Control required type="text" name="first_name" id="first_name" placeholder="First Name" onChange={this.handleChange.bind(this)} value={this.state.first_name} />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group>
                            <Form.Control required type="text" name="last_name" id="last_name" placeholder="Last name" onChange={this.handleChange.bind(this)} value={this.state.last_name} />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group>
                    <Form.Control required type="text" name="address" id="address" placeholder="Address" onChange={this.handleChange.bind(this)} value={this.state.address}/>
                </Form.Group>

                <Form.Group>
                    <Form.Control required type="text" name="city" id="city" placeholder="City" onChange={this.handleChange.bind(this)} value={this.state.city}/>
                </Form.Group>

                <Row>
                    <Col md={5}>
                        <Form.Group>
                            <Form.Label for="country">Country</Form.Label>
                            <Form.Control required disabled type="text" name="country" id="country" value="United States" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group>
                            <Form.Label for="state">State</Form.Label>
                            <Form.Control required type="text" name="state" id="state" placeholder="State" onChange={this.handleChange.bind(this)} value={this.state.us_state}/>
                        </Form.Group>
                    </Col>

                    <Col md={3}>
                        <Form.Group>
                            <Form.Label for="zip">Zip</Form.Label>
                            <Form.Control required type="text" name="zip" id="zip" placeholder="ZIP Code" onChange={this.handleChange.bind(this)} value={this.state.zip}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group>
                    <Form.Control type="phone" name="phone" id="phone" placeholder="Phone Number" />
                </Form.Group>


                <h2 className = "checkout-title mb-3">Payment</h2>

                <Button outline className= {paymentSelection ==='credit' ? 'active' : null} color="secondary" value="credit" onClick={this.toggleContent} >Credit Card</Button>
                <Button outline className={paymentSelection ==='finance' ? 'active' : null} color="secondary" value="finance" onClick={this.toggleContent} >Finance</Button>
                <br /> <br />

                {this.switchContent(paymentSelection)}

                <Form.Group>
                        <Form.Control required type="text" name="name" id="name" placeholder="Cardholder's Name" />
                    </Form.Group>

                    <Row>
                        <Col md="6">
                            <Form.Group>
                                <Form.Control required type="text" name="cardNum" id="cardNum" placeholder="Card Number" />
                            </Form.Group>
                        </Col>

                        <Col md="3">
                            <Form.Group>
                                <Form.Control required type="text" name="cardExp" id="cardExp" placeholder="MM/YY" />
                            </Form.Group>
                        </Col>

                        <Col md="3">
                            <Form.Group>
                                <Form.Control required type="text" name="cardCVC" id="cardCVC" placeholder="CVC" />
                            </Form.Group>
                        </Col>
                    </Row>
                <br /><br />
                <Button className="btn-dark" type="submit">Confirm Order</Button>
                </Form>
                <br />
            </div>
        );
    }
}
export default CheckoutForm;