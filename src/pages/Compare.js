import React, { Component } from 'react'
import {Table} from "react-bootstrap"

export class Compare extends Component {
    state={
        selectedCar1:{},
        selectedCar2:{},
        selectedCar3:{}
    }

    componentDidMount () {
        var localcar1 = localStorage.getItem('localcar1');
        var localcar2 = localStorage.getItem('localcar2');
        var localcar3 = localStorage.getItem('localcar3');
        this.setState({selectedCar1: JSON.parse(localcar1,localcar2,localcar3)})
        this.setState({selectedCar2: JSON.parse(localcar2)})
        this.setState({selectedCar3: JSON.parse(localcar3)})
    }


    render() {
        
        return (
           
            <Table striped bordered hover variant="dark" style={{color: "black"}}>
            <thead>
              <tr style={{color: "white"}}> 
                <th >#</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Color</th>
                <th>Year</th>
                <th>Price</th>
                <th>Type</th>
                <th>Engine</th>
              </tr>
            </thead>
            <tbody>
             {this.state.selectedCar1 ? <tr>
                <td>1</td>
                <td>{this.state.selectedCar1.make}</td>
                <td>{this.state.selectedCar1.model}</td>
                <td>{this.state.selectedCar1.exterior_color}</td>
                <td>{this.state.selectedCar1.year}</td>
                <td>{this.state.selectedCar1.price}</td>
                <td>{this.state.selectedCar1.type}</td>
                <td>{this.state.selectedCar1.engine}</td>
              </tr> : null} 
             {this.state.selectedCar2 ? <tr>
                <td>2</td>
                <td>{this.state.selectedCar2.make}</td>
                <td>{this.state.selectedCar2.model}</td>
                <td>{this.state.selectedCar2.exterior_color}</td>
                <td>{this.state.selectedCar2.year}</td>
                <td>{this.state.selectedCar2.price}</td>
                <td>{this.state.selectedCar2.type}</td>
                <td>{this.state.selectedCar2.engine}</td>
              </tr> : null} 
             {this.state.selectedCar3 ? <tr>
                <td>3</td>
                <td>{this.state.selectedCar3.make}</td>
                <td>{this.state.selectedCar3.model}</td>
                <td>{this.state.selectedCar3.color}</td>
                <td>{this.state.selectedCar3.year}</td>
                <td>{this.state.selectedCar3.price}</td>
                <td>{this.state.selectedCar3.type}</td>
                <td>{this.state.selectedCar3.engine}</td>
              </tr> : null} 
            </tbody>
          </Table>
        )
    }
}

export default Compare






var turnlocalcar = localStorage.getItem('localcar');