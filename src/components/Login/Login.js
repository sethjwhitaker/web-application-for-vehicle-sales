import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./login.css";
import {Link} from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [newPassword, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && newPassword.length > 0;
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

    async function handleSubmit(event) {
        event.preventDefault();

        const options = {

            // Adding method type
            method: "POST",
              
            // Adding body or contents to send
            body: JSON.stringify({
              email: email,
              password: newPassword
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
            console.log(data);

            retrieveSales();
        } catch (e) {
            console.log(e);
        }
        
    }


    return (
    <div className="Login">
      <Form className="loginForm" onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="newPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="newPassword"
            value={newPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="loginButton" block type="submit" disabled={!validateForm()}>
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
