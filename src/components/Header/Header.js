import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src = {'img/car-header.jpg'} />
                            <Carousel.Caption className="d-sm-block">
                                <h4>All the cars you could ever want.</h4>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src = {'img/parts-header.jpg'} />
                            <Carousel.Caption className="d-sm-block">
                                <h4>All the parts you will ever need.</h4>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src = {'img/logo-header.png'} />
                            <Carousel.Caption className="d-sm-block">
                                <h4>All in one convenient online store.</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </header>
            </div>
        )
    }
}

export default Header