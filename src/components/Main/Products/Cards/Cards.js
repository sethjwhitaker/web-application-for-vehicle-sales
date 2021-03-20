import React, { Component } from 'react';
import { Card, Button} from 'react-bootstrap'


class Cards extends Component {
    render() {

        
        return (
            <div>
                <Card style={{ width: '12rem', height: '30rem' }}>
                    <Card.Img variant="top" src="https://www.linkpicture.com/q/LPic604691ad669e8533277294.jpg" />
                    <Card.Body>
                            <Card.Title>{this.props.car.brand}</Card.Title>
                            <Card.Text>
                            Car Model is: {this.props.car.model}<br/>
                            Car Color is: {this.props.car.color}<br />
                            Car Year is: {this.props.car.year}<br />
                            </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        <Button variant="primary">Compare</Button>
                    </Card.Body>
                    </Card>
            </div>
        )
    }
}

export default Cards