import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Email from '../../components/Info/Email';
import Description from '../../components/Info/Description';
import ProductHeader from '../../components/Info/ProductHeader';
import ProductInfo from '../../components/Info/ProductInfo';
import './CarInfo.css';

export default class CarInfo extends Component {
    render() {
        return (
        <div>
            <Container className="flex-container">
               
                <ProductHeader
                title_header = "Brand"
                mileage_header = "Part Type"
                price_header = "Price"
                title = "?"
                mileage = "?"
                price = "?" />
                
                <Row>
                    <ProductInfo
                    imgURL = "https://www.linkpicture.com/q/LPic604691ad669e8533277294.jpg"
                     />

                    <Col className="col-6">
                        <Description
                        desc = "A text description about the part here with everything a customer will need to know."
                        />
                        <Email />

                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}