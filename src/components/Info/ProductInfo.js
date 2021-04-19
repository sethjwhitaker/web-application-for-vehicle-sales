import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import VehicleTable from "./VehicleTable";
import PartsTable from "./PartsTable";


class ProductInfo extends Component {

    productTable(props) {
        const prod_type = props.prod;
        if (prod_type == "vehicle") {
            return (
            <VehicleTable 
            class = {props.class}
            type = {props.type}
            engine = {props.engine}
            transmission = {props.transmission}
            MPG = {props.MPG}
            exterior_color = {props.exterior_color}
            interior_color = {props.interior_color}
            />
            )
        }

        else {
            return <PartsTable 
                prod_num = {props.prod_num}
                warranty = {props.warranty}
                compatability = {props.compatability}
                color = {props.color}
            />
        }
        
    }


    render() {
        return (
            <Col className="col-6">
                <div className="well">
                    <img src={ this.props.imgURL } alt="Product image" width="100%" height="100%" />
                    {this.productTable(this.props)}
                    
                </div>
            </Col>
        )
    }
}
export default ProductInfo