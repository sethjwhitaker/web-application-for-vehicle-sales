import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import Email from '../../components/Info/Email';
import Description from '../../components/Info/Description';
import ProductHeader from '../../components/Info/ProductHeader';
import ProductInfo from '../../components/Info/ProductInfo';
import './CarInfo.css';


class CarInfo extends Component {

    state = {
        car: []
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`${window.location.protocol}//${window.location.hostname}/vehicles/${id}`, {
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log("data is:");
            console.log(data);
            this.setState({car : data})
            console.log("price is:")
            console.log(this.state.car.price)
        })
    }

    render() {
        return (
        <div>
            <Container className="flex-container">
                
                <ProductHeader
                title_header = "Vehicle Title"
                mileage_header = "Mileage"
                price_header = "Price"
                title = "?"
                mileage = "?"
                price = {this.state.car.price}
                />
                
                <Row>
                    <ProductInfo
                    imgURL = "https://www.linkpicture.com/q/LPic604691ad669e8533277294.jpg"
                    prod = "vehicle"
    
                    />
    
                    <Col className="col-6">
                        <Description 
                        desc = "A text description about the vehicle here with everything a customer will need to know."
                        />
                        <Email />
    
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}
export default withRouter(CarInfo)