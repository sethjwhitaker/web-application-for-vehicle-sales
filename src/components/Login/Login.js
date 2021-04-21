import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./login.css";
import {Link} from "react-router-dom";

class Login extends Component {
    state = {
        email: "",
        newPassword: ""
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.newPassword.length > 0;
    }

    //Test auth
    /*async function retrieveSales() {
        try {
            const response = await fetch(`${window.location.protocol}//${window.location.hostname}/sales`);
            const data = await response.json();
            console.log(data);

        } catch(e) {
            console.log(e);
        }
    }*/

    async handleSubmit(event) {
        event.preventDefault();

        const options = {

            // Adding method type
            method: "POST",
              
            // Adding body or contents to send
            body: JSON.stringify({
              email: this.state.email,
              password: this.state.newPassword
          }),
              
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
          };

        try {
            // POST request using fetch()
            const response = await fetch(`${window.location.protocol}//${window.location.hostname}/users/login`, options);
            const data = await response.json();
            
            this.props.onLogin(data);

            //retrieveSales();
        } catch (e) {
            console.log(e);
        }
        
    }

    render() {
        return (
            <div className="container Login">
              
              <Form className="loginForm" onSubmit={this.handleSubmit.bind(this)}>
                
        
        
              <h2>Login</h2>
              <br></br>
        
        
        
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={(e) => this.setState({email:e.target.value})}
                  />
                </Form.Group>
                <Form.Group controlId="newPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="newPassword"
                    value={this.state.newPassword}
                    onChange={(e) => this.setState({newPassword:e.target.value})}
                  />
                </Form.Group>
                <Button className="loginButton" block type="submit" disabled={!this.validateForm()}>
                  Login
                </Button>
        
                <br></br>
                <Link to='/register'>Sign Up</Link>
                <br></br>
                <Link to='/admin'>Admin Page</Link>
              </Form>
        
              
              
            </div>
          );
    }
    
}

export default Login;
