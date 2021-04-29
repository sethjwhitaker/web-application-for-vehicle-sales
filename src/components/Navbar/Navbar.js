import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {

    getNav(props) {
        let status = props.loggedIn;
        let type = props.userInfo.type;

        if(status == true) {

            if(type == "admin") {
                return (
                    <div>
                        <ReactBootStrap.NavDropdown.Item as={NavLink} exact to="/admin">Admin</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Divider />
                        <ReactBootStrap.NavDropdown.Item as={NavLink} exact to="/logout">Logout</ReactBootStrap.NavDropdown.Item>
                    </div>
                )
            }

            else {
                return (
                    <div>
                        <ReactBootStrap.NavDropdown.Item as={NavLink} exact to="/logout">Logout</ReactBootStrap.NavDropdown.Item>
                    </div>
                )
            }

        }

        else {
            return (
                <div>
                    <ReactBootStrap.NavDropdown.Item as={NavLink} exact to="/login">Login</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item as={NavLink} exact to="/register">Register</ReactBootStrap.NavDropdown.Item>
                </div>
            )
        }
    }

    render() {
        return(
            <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
                <ReactBootStrap.Navbar.Brand as={Link} to="/">CSCI 441 Dealership</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.NavDropdown title="Products" id="collasible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item as={NavLink} exact to="/">Cars</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Divider />
                        <ReactBootStrap.NavDropdown.Item as={NavLink} exact to="/parts">Parts</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                    <ReactBootStrap.Nav.Link as={NavLink} exact to="/financing">Financing</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                    <ReactBootStrap.NavDropdown title="Account" id="collasible-nav-dropdown">
                        {this.getNav(this.props)}
                    </ReactBootStrap.NavDropdown>
                    <ReactBootStrap.Nav.Link as={NavLink} exact to="/cart">Cart</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        )
    }
}

export default Navbar
