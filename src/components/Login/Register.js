import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./login.css";
import { stringify } from "postcss";

export default function Register() {
    const [newEmail, setEmail] = useState("");
    const [newPassword, setPassword] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    fetch('https://web-app-for-vehicle-sales-dev.herokuapp.com/vehicles', {
      mode: 'no-cors',  

      headers: {
      "Access-Control-Allow-Origin" : "*", 
      "Access-Control-Allow-Credentials" : true,
      "Content-type": "application/json"
      }
    })
      .then(response => console.log(response))
      .then(data => console.log("data is" + data))

      /*
      // POST request using fetch()
    fetch("https://web-app-for-vehicle-sales-dev.herokuapp.com/users/register", {
          
      mode: 'no-cors',

      // Adding method type
      method: "POST",
        
      // Adding body or contents to send
      body: {
        first_name: firstName,
        last_name: lastName,
        email: newEmail,
        password: newPassword
    },
        
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    })

    // Converting to JSON
    .then(response => response.json())

    // Displaying results to console
    .then(json => console.log(json));*/

    return (
      <div>
      </div>


    /*<div className="Login">
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
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
            autoFocus
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
        <a href=''>Login</a>
      </Form>
    </div>*/
  );
}
