import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src = {'img/car-header.jpg'} />
                            <Carousel.Caption>
                                <h3 className="caption">All the cars you could ever want.</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src = {'img/parts-header.jpg'} />
                            <Carousel.Caption>
                                <h3 className="caption">All the parts you will ever need.</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src = {'img/logo-header.png'} />
                            <Carousel.Caption>
                                <h3 className="caption">All in one convenient online store.</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </header>
            </div>
        )
    }
}

export default Header