import React, { Component } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap'
import './Sidebar.css';
import {NavLink} from 'react-router-dom'

class Sidebar extends Component {

    state={
        selectedCar1:{},
        selectedCar2:{},
        selectedCar3:{}
    }

    onChangeHandler = (event) => {
        let brandName = event.target.value
        this.props.optionSelected(event.target.value)
    } 

    modelChangeHandler = (event) => {
        this.props.modelSelected(event.target.value)
    }

    typeChangeHandler = (event) => {
        this.props.typeSelected(event.target.value)
    }

    colorChangeHandler = (event) => {
        this.props.colorSelected(event.target.value)
    }

    yearChangeHandler = (event) => {
        this.props.yearSelected(event.target.value)
    }

    sortChangeHandler = (event) => {
        this.props.sortSelected(event.target.value)
    }

    deleteLocal = (event) => {
        event.preventDefault()
        localStorage.clear();
    }
   

    componentDidMount () {
        var localcar1 = localStorage.getItem('localcar1');
        var localcar2 = localStorage.getItem('localcar2');
        var localcar3 = localStorage.getItem('localcar3');
        this.setState({selectedCar1: JSON.parse(localcar1,localcar2,localcar3)})
        this.setState({selectedCar2: JSON.parse(localcar2)})
        this.setState({selectedCar3: JSON.parse(localcar3)})
        console.log("state",JSON.parse(localcar1));
    }
    compareClicked = () => {
        var localcar1 = localStorage.getItem('localcar1');
        var localcar2 = localStorage.getItem('localcar2');
        var localcar3 = localStorage.getItem('localcar3');
        this.setState({selectedCar1: JSON.parse(localcar1,localcar2,localcar3)})
        this.setState({selectedCar2: JSON.parse(localcar2)})
        this.setState({selectedCar3: JSON.parse(localcar3)})
        console.log("state",JSON.parse(localcar1));
    }
    
    render() {

        let brandset = new Set()
        let brands = this.props.data.map(car => {
            brandset.add(car.make)
            })
        brandset = Array.from(brandset).sort()

        let carModels = new Set()
        let models = this.props.carBrands.map(car => {
        carModels.add(car.model)
        })
        carModels = Array.from(carModels).sort()

        let carTypes = new Set()
        let types = this.props.carTypes.map(car =>  {
            
            carTypes.add(car.type)
        })
        carTypes = Array.from(carTypes).sort()


        let carTypes2 = new Set()

        let types2 = this.props.carModels.map(car =>  {
            
            carTypes2.add(car.type)
        })
        carTypes2 = Array.from(carTypes2).sort()





        let carColors = new Set()

        let colors = this.props.carColorArr.map(car =>  {
            
            carColors.add(car.exterior_color)
        })
        carColors = Array.from(carColors).sort()





        return (
            <div>
                <Form className="Form">

                <InputGroup className="InputGroup">
                    <NavLink to='/compare'>
                    <Button variant="primary" type="submit">
                            Compare
                            </Button>
                   
                        </NavLink>
                        <Button onClick={this.deleteLocal}variant="danger" type="submit">
                            Delete
                            </Button>
                        <InputGroup.Prepend>
                            
                             
                        </InputGroup.Prepend>
                    </InputGroup>


                    <h4>Filter By: </h4>
                    
                    {/* Filtering by Brand */}
                    <Form.Group controlId="formBasicBrand">
                        <Form.Label>Make</Form.Label>
                        <Form.Control as="select" size="sm" onChange={this.onChangeHandler}>
                            <option value={''}>All Cars</option>
                        {brandset.map((make,index) => (
                            <option value={make} key={index}>{make}</option>
                        ))}
                     
                                
                        </Form.Control>
                    </Form.Group>

                    {/* Filtering by Model */}
                    <Form.Group controlId="formBasicModel">
                        <Form.Label>Model</Form.Label>
                        <Form.Control as="select" size="sm" custom onChange={this.modelChangeHandler}>
                            <option value=''> All Models </option>
                            {   
                                carModels.map((model,index) => (
                                <option key={index} value={model}>{model}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    {/* Filtering by Type */}
                    <Form.Group controlId="formBasicType">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" size="sm" custom onChange={this.typeChangeHandler}>
                            <option value=''> All Types </option>
                            {   
                                carTypes2.map((type,index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    
                    {/* Filtering by Color */}
                    <Form.Group controlId="formBasicColor">
                        <Form.Label>Color</Form.Label>
                        <Form.Control as="select" size="sm" custom onChange={this.colorChangeHandler}>
                            <option value={''}>Any Colors</option>
                            {
                                carColors.map((color,index) => (
                                <option key={index} value={color}>{color}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    
                    {/*Filtering by Year*/}
                    <Form.Group controlId="formBasicYear">
                        <Form.Label>Year</Form.Label>
                        <Form.Control as="select" size="sm" custom onChange={this.yearChangeHandler}>
                            <option value="">All Year</option>
                            {this.props.carYearsArr.map((car,index) => (
                                <option key={index} value={car.year}>{car.year}</option>
                                ))}
                        </Form.Control>
                    </Form.Group>

                    {/* Sorting */}
                    <h4>Sort By: </h4>
                    <Form.Group controlId="formBasicSort">
                        <Form.Control as="select" size="sm" custom onChange={this.sortChangeHandler}>

                            <option value="1">Newest</option>
                            
                            <option value="2">Oldest</option>
                            
                            <option value="3">Cheapest</option>

                            <option value="4">Most Expensive</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

            </div>
        )
    }
}

export default Sidebar;