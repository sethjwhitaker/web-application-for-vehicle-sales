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
            class
            type
            engine
            transmission
            MPG
            exterior_color
            interior_color
            />
            )
        }

        else {
            return <PartsTable />
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