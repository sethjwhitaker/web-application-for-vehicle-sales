import React, { Component } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap'
import './Sidebar.css';

class Sidebar extends Component {
    onChangeHandler = (event) => {
        this.props.optionSelected(event.target.value)
        console.log(event.target.value);
    } 
    
    render() {

      
      let brandset = new Set()
      let brands = this.props.data.map(car => {
          brandset.add(car.brand)
        })
      brandset = Array.from(brandset).sort()


     
      
        return (
            <div>
                <Form className="Form">

                    <InputGroup className="InputGroup">
                        <Button variant="primary" type="submit" >
                            Compare
                        </Button>
                        <InputGroup.Prepend>
                            <InputGroup.Text>3</InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>


                    <h4>Filter By: </h4>
                    <Form.Group controlId="formBasicBrand">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control as="select" size="sm" onChange={this.onChangeHandler}>
                            <option value={''}>All Cars</option>
                        {brandset.map((brand,index) => (
                            <option value={`${brand}`} key={index}>{brand}</option>
                        ))}
                     
                                
                        </Form.Control>
                    </Form.Group>

                    
                    <Form.Group controlId="formBasicModel">
                        <Form.Label>Model</Form.Label>
                        <Form.Control as="select" size="sm" custom>
                            <option>Avalon</option>
                            <option>Camry</option>
                            <option>Corolla</option>
                            <option>Prius</option>
                            <option>Yaris</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicColor">
                        <Form.Label>Color</Form.Label>
                        <Form.Control as="select" size="sm" custom>
                            <option>Red</option>
                            <option>Green</option>
                            <option>Blue</option>
                            <option>Purple</option>
                            <option>Black</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicYear">
                        <Form.Label>Year</Form.Label>
                        <Form.Control as="select" size="sm" custom>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                        </Form.Control>
                    </Form.Group>

                    {/* Can be a component */}
                    <h4>Sort By: </h4>
                    <Form.Group controlId="formBasicYear">
                        <Form.Control as="select" size="sm" custom>
                            <option value="">Newest</option>
                            
                            <option value="">Oldest</option>
                            
                            <option value="">Most Popular</option>
                            
                            <option value="">Most Viewed</option>
                            
                            <option value="">Cheapest</option>

                            <option value="">Most Expensive</option>
                        </Form.Control>
                    </Form.Group>

                </Form>

            </div>
        )
    }
}

export default Sidebar;