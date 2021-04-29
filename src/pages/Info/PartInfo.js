import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import Email from '../../components/Info/Email';
import Description from '../../components/Info/Description';
import ProductHeader from '../../components/Info/ProductHeader';
import ProductInfo from '../../components/Info/ProductInfo';
import './CarInfo.css';

class PartInfo extends Component {

    state = {
        part: []
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`${window.location.protocol}//${window.location.hostname}/parts/${id}`, {
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log("data is:");
            console.log(data);
            this.setState({part : data});
        })
    }

    render() {
        return (
        <div>
            <Container className="flex-container">
               
                <ProductHeader
                prod = "part"
                title_header = "Brand"
                //mileage_header = "Quantity"
                price_header = "Price"
                title = {this.state.part.short_description}
                //mileage = {this.state.part.quantity}
                price = {this.state.part.price} />
                
                <Row>
                    <ProductInfo
                    imgURL = "https://www.linkpicture.com/q/LPic604691ad669e8533277294.jpg"
                    prod = "part"
                    prod_num = {this.state.part.product_id}
                    warranty = {this.state.part.warranty}
                    compatability = {this.state.part.compatability}
                    color = {this.state.part.color}
                     />

                    <Col md='6'>
                        <Description
                        desc = {this.state.part.description}
                        />
                        <Email />

                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}
export default withRouter(PartInfo)