import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Products from './Products/Products'
import Sidebar from './Sidebar/Sidebar'

class Main extends Component {
    
    render(props) {
        
        return (
            <Container>
                <Row>
          
                    <Col md={2}><Sidebar optionSelected={this.props.optionSelected} data={this.props.dataCar}/></Col>
                    <Col md={10}><Products data={this.props.data}/></Col>
                </Row>
            </Container>
        )
    }
}

export default Main;