import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./login.css";
import {Link} from "react-router-dom";

export default function Register() {
    const [newEmail, setEmail] = useState("");
    const [newPassword, setPassword] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");

    function validateForm() {
        return newEmail.length > 0 && newPassword.length > 0 && firstName.length > 0 && lastName.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        // POST request using fetch()
    fetch(`${window.location.protocol}//${window.location.hostname}/users/register`, {
          

        // Adding method type
        method: "POST",
          
        // Adding body or contents to send
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: newEmail,
          password: newPassword
      }),
          
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
      })
  
      // Converting to JSON
      .then(response => response.json())
  
      // Displaying results to console
      .then(json => console.log(json));
    }

    return (

    <div className="Login container">
      <Form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <br></br>
      <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            type="firstName"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="lastName"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="newEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="newEmail"
            value={newEmail}
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
          Register
        </Button>

        <br></br>
        <p>Already a user? <Link to='/login'>Login</Link> </p>
      </Form>
    </div>
  );
}
