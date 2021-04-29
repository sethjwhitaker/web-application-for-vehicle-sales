import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import Calculate from '../Finance/Calculate';


class FinanceCalculator extends Component {
    
    state = {
        amount: this.props.total,
        downPayment: '1000',
        interest: '4.99',
        term: '60'
    };
    
    handleAmountChange = (e) => {
        this.setState({ amount: e.target.value });
    };
    
    handleDownChange = (e) => {
        this.setState({ downPayment: e.target.value });
    };
    
    handleInterestChange = (e) => {
        this.setState({ interest: e.target.value });
    };
    
    handleTermChange = (e) => {
        this.setState({ term: e.target.value });
    };
    
    render() {
        const { amount, downPayment, interest, term} = this.state;
        
        return (
        <div>
            <Row>
                <Col className="col-6">
            
                    <Form.Group className="finance-form">
                        <Form.Label>Price: </Form.Label>
                        <Form.Control
                        disabled
                        type='text'
                        name='amount'
                        placeholder='Price of Vehicle'
                        onChange={this.handleAmountChange}
                        value={amount}
                        />
                    </Form.Group>

                    <Form.Group className="finance-form">
                        <Form.Label>Down Payment: </Form.Label>
                        <Form.Control
                        required
                        type='number'
                        min='1000'
                        max = {amount}
                        name='downPayment'
                        placeholder='Down Payment'
                        onChange={this.handleDownChange}
                        value={downPayment}
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="select" className="finance-form">
                        <Form.Label>What's your credit score?</Form.Label>
                        <Form.Control 
                        as="select"
                        name="interest" 
                        onChange={this.handleInterestChange}
                        >
                            <option value="2.81">Excellent: 750+</option>
                            <option selected value="4.99">Good: 700-749</option>
                            <option value="7.45">Average: 650-699</option>
                            <option value="10.12">Below Average: 550-649</option>
                        </Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId="select" className="finance-form">
                        <Form.Label className="calc-label">Choose your loan term:</Form.Label>
                        <Form.Control 
                        as="select"
                        name="term" 
                        onChange={this.handleTermChange}
                        >
                            <option value="84">84 Months</option>
                            <option value="72">72 Months</option>
                            <option selected value="60">60 Months</option>
                            <option value="48">48 Months</option>
                            <option value="36">36 Months</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            
            <Col className="col-6">
            <Calculate 
            term={term} 
            interest={interest} 
            amount={amount} 
            downPayment={downPayment}
            />
            </Col>
            </Row>
       
       </div>
        );
    }
}

export default FinanceCalculator;