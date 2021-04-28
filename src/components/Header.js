import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block h-100" src = {'img/car-header.jpg'} />
                            <Carousel.Caption>
                                <h3>All the cars you could ever want.</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block h-100" src = {'img/parts-header.jpg'} />
                            <Carousel.Caption>
                                <h3>All the parts you will ever need.</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block h-100" src = {'img/logo-header.png'} />
                        </Carousel.Item>
                    </Carousel>
                </header>
            </div>
        )
    }
}

export default Header