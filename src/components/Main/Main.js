import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Products from './Products/Products'
import Sidebar from './Sidebar/Sidebar'

class Main extends Component {
    
    render(props) {
        
        return (
            <Container>
                <Row>
          
                    <Col md={2}><Sidebar carBrands={this.props.carBrands}optionSelected={this.props.optionSelected} modelSelected={this.props.modelSelected} data={this.props.dataCar}/></Col>
                    <Col md={10}><Products cartId={this.props.cartId} data={this.props.data} isCar={true}/></Col>
                </Row>
            </Container>
        )
    }
}

export default Main;