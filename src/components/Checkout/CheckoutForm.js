import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FinanceCalculator from './FinanceCalculator';
import { withRouter } from 'react-router-dom';

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
        let customer_address = this.state.cust_address + ", " + this.state.city + ", " + this.state.us_state + ", " + this.state.zip;
        
        fetch(`${window.location.protocol}//${window.location.hostname}/sales/${this.props.id}`, {
            method: "PUT",
              
            body: JSON.stringify({
              address: customer_address,
              status: "processing"
          }),
            
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
          })
    
          .then(response => {
              this.props.createCart();
              return response.json();
          })
          .then(json => console.log(json));

          this.props.history.push('/receipt');
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
                if(this.props.total < 10000) {
                    return <div>
                        <h3 className="text-center">Sorry, Financing is only available for purchases over $10,000</h3>
                        <br /><br />
                    </div>
                }
                else {
                    return <div>
                        <FinanceCalculator
                        total = {this.props.total} />
                        <br /><br />
                    </div>
                }
                
        
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
                            <Form.Control required type="text" name="us_state" placeholder="State" value={us_state} onChange={this.handleChange} />
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

                <Button outline className={`checkout-button ${paymentSelection ==='credit' ? 'active' : null}`} color="secondary" value="credit" onClick={this.toggleContent} >Credit Card</Button>
                <Button outline className={`checkout-button ${paymentSelection ==='finance' ? 'active' : null}`} color="secondary" value="finance" onClick={this.toggleContent} >Finance</Button>
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
export default withRouter(CheckoutForm);