import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <ReactBootStrap.Navbar.Brand href="#home">CSCI 441 Dealership</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.NavDropdown title="Products" id="collasible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href="#">Cars</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Divider />
                        <ReactBootStrap.NavDropdown.Item href="#">Parts</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                    <ReactBootStrap.Nav.Link href="#">Financing</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                    <ReactBootStrap.NavDropdown title="Account" id="collasible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href="#">Login</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Divider />
                        <ReactBootStrap.NavDropdown.Item href="#">Register</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                    <ReactBootStrap.Nav.Link href="#">Cart</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        )
    }
}

export default Navbar