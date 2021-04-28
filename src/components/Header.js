import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <Carousel style = {{'height': "325px", 'width':"100%"}}>
                        <Carousel.Item style = {{'height': "325px", 'width':"100%"}}>
                            <img className="d-block w-100" src = {'img/car-header.jpg'} />
                            <Carousel.Caption>
                                <h3>All the cars you could ever want.</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style = {{'height': "325px", 'width':"100%"}}>
                            <img className="d-block w-100" src = {'img/parts-header.jpg'} />
                            <Carousel.Caption>
                                <h3>All the parts you will ever need.</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style = {{'height': "325px", 'width':"100%"}}>
                            <img className="d-block w-100" src = {'img/logo-header.png'} />
                            <Carousel.Caption>
                                <h3>All in one convenient online store.</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </header>
            </div>
        )
    }
}

export default Header