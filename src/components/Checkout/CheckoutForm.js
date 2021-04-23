import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FinanceCalculator from './FinanceCalculator';

class CheckoutForm extends Component {
	
    state = {
        paymentSelection: 'credit',
        email: '',
        first_name:'',
        last_name: '',
        cust_address: '',
        city: '',
        us_state: '',
        zip: '',
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }

    handleSubmit = (event) => {
        event.preventDefault();
        let cust_address = this.state.cust_address;
        console.log(cust_address);
        console.log(this.props.id);
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
        const { paymentSelection, email, first_name, last_name, cust_address, city, us_state, zip } = this.state;

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <h2 className="checkout-title mb-3">Contact Information</h2>
    
                <Form.Group>
                    <Form.Control required type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange}/>
                </Form.Group>

                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Control required type="text" name="first_name" placeholder="First Name" value={first_name} onChange={this.handleChange} />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group>
                            <Form.Control required type="text" name="last_name" placeholder="Last name" value={last_name} onChange={this.handleChange} />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group>
                    <Form.Control required type="text" name="cust_address" placeholder="Address" value={cust_address} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Control required type="text" name="city" placeholder="City" value={city} onChange={this.handleChange}/>
                </Form.Group>

                <Row>
                    <Col md={5}>
                        <Form.Group>
                            <Form.Label for="country">Country</Form.Label>
                            <Form.Control required disabled type="text" name="country" value="United States" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group>
                            <Form.Label for="state">State</Form.Label>
                            <Form.Control required type="text" name="state" placeholder="State" value={us_state} onChange={this.handleChange} />
                        </Form.Group>
                    </Col>

                    <Col md={3}>
                        <Form.Group>
                            <Form.Label for="zip">Zip</Form.Label>
                            <Form.Control required type="text" name="zip" placeholder="ZIP Code" value={zip} onChange={this.handleChange}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group>
                    <Form.Control type="phone" name="phone" placeholder="Phone Number" />
                </Form.Group>


                <h2 className = "checkout-title mb-3">Payment</h2>

                <Button outline className= {paymentSelection ==='credit' ? 'active' : null} color="secondary" value="credit" onClick={this.toggleContent} >Credit Card</Button>
                <Button outline className={paymentSelection ==='finance' ? 'active' : null} color="secondary" value="finance" onClick={this.toggleContent} >Finance</Button>
                <br /> <br />

                {this.switchContent(paymentSelection)}

                <Form.Group>
                        <Form.Control required type="text" name="cust_name" placeholder="Cardholder's Name" />
                    </Form.Group>

                    <Row>
                        <Col md="6">
                            <Form.Group>
                                <Form.Control required type="text" name="cardNum" placeholder="Card Number" />
                            </Form.Group>
                        </Col>

                        <Col md="3">
                            <Form.Group>
                                <Form.Control required type="text" name="cardExp" placeholder="MM/YY" />
                            </Form.Group>
                        </Col>

                        <Col md="3">
                            <Form.Group>
                                <Form.Control required type="text" name="cardCVC" placeholder="CVC" />
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