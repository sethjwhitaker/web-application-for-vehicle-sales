import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export class Header extends Component {
    render() {
        return (
            <div>
                <div class='container-fluid'>
                    <Carousel>
                        <Carousel.Item style = {{'height': "300px"}}>
                            <img style = {{'height' : "300px"}} className="d-block w-100" src = {'img/car-header.jpg'} />
                            <Carousel.Caption>
                                <h3>Test 1</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style = {{'height': "300px"}}>
                            <img style = {{'height' : "300px"}} className="d-block w-100" src = {'img/parts-header.jpg'} />
                            <Carousel.Caption>
                                <h3>Test 2</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style = {{'height': "300px"}}>
                            <img style = {{'height' : "300px"}} className="d-block w-100" src = {'img/logo-header.png'} />
                            <Carousel.Caption>
                                <h3>Test 3</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Header