import React, { Component } from 'react';
import Cards from './Cards/Cards'
import './Products.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap'


class Products extends Component {

 
  render() {
  
    return (
      <div className="Products">

        <Container>
          <Row>
            {this.props.data.map(car => (
              <Col key={car.id}> 
              <Cards cartId={this.props.cartId} car={car}/> </Col>
            ))}
          </Row>
        </Container>

      </div>


    )
  }
}

export default Products;