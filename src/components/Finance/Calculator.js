import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from 'react-bootstrap';
import Calculate from './Calculate';

class Calculator extends Component {
    state = {
        amount: '20000',
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
        <Container className="flex-container">
            <h1 className="calc-title">Auto Loan Estimator</h1>
            <Row>
            <Col className="col-6">
            <Form>
                    <Form.Group className="calc-form">
                        <Form.Label>Vehicle Price: </Form.Label>
                        <Form.Control
                        type='text'
                        name='amount'
                        placeholder='Price of Vehicle'
                        onChange={this.handleAmountChange}
                        value={amount}
                        />
                    </Form.Group>

                    <Form.Group className="calc-form">
                        <Form.Label>Down Payment: </Form.Label>
                        <Form.Control
                        type='text'
                        name='downPayment'
                        placeholder='Down Payment'
                        onChange={this.handleDownChange}
                        value={downPayment}
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="select" className="calc-form">
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
                    
                    <Form.Group controlId="select" className="calc-form">
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

            </Form>
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
        </Container>
        );
    }
}

export default Calculator;