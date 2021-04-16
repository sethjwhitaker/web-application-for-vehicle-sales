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
            this.setState({car : data});
        })
    }

    render() {
        return (
        <div>
            <Container className="flex-container">
                
                <ProductHeader
                prod_type = "vehicle"
                title_header = "Vehicle Title"
                mileage_header = "Mileage"
                price_header = "Price"
                make = {this.state.car.make}
                model = {this.state.car.model}
                year = {this.state.car.year}
                mileage = {this.state.car.mileage}
                price = {this.state.car.price}
                />
                
                <Row>
                    <ProductInfo
                    imgURL = "https://www.linkpicture.com/q/LPic604691ad669e8533277294.jpg"
                    prod = "vehicle"
                    class = {this.state.car.class}
                    type = {this.state.car.type}
                    engine = {this.state.car.engine}
                    transmission = {this.state.car.transmission}
                    MPG = {this.state.car.mileage}
                    exterior_color = {this.state.car.exterior_color}
                    interior_color = {this.state.car.interior_color}
                    />
    
                    <Col className="col-6">
                        <Description 
                        desc = {this.state.car.description}
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