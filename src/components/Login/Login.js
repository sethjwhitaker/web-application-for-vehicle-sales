import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./login.css";
import {Link} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

class Login extends Component {
    state = {
        email: "",
        newPassword: "",
        status: "loggedOut"
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
            
            if(response.status == 200) {
                this.setState({status: "success"});
                this.props.onLogin(data);
            } else if (response.status == 401) {
                this.setState({status: "Incorrect Password"});
            } else if (response.status == 404) {
                this.setState({status: "Incorrect Email"});
            } else {
                this.setState({status: "Something went wrong"});
            }
            

            //retrieveSales();
        } catch (e) {
            this.setState({status: "An Error occurred while Logging in."});
            console.log(e);
        }
        
    }

    renderForm(errorMessage) {
        return (
            <Form className="loginForm" onSubmit={this.handleSubmit.bind(this)}>
                
        
        
              <h2>Login</h2>
              <br></br>
        
                {errorMessage ? <p className="text-danger">{errorMessage}</p> : null}
        
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
        );
    }

    renderLogin() {
        if(this.state.status === "loggedOut") {
            return this.renderForm();
        } else if(this.state.status === "submitted") {
            return (<Spinner animation="border" />);
        } else if(this.state.status === "success") {
            return (<h2>Successfully Logged In</h2>);
        } else {
            return this.renderForm(this.state.status);
        }
    }

    render() {
        return (
            <div className="container Login">
              
              
            {this.renderLogin()}
              
              
            </div>
          );
    }
    
}

export default Login;
