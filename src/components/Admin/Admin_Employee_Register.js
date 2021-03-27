import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Admin_Employee_Register() {
    const [newEmail, setEmail] = useState("");
    const [newPassword, setPassword] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [newType, setnewType] = useState("");

    function validateForm() {
        return newEmail.length > 0 && newPassword.length > 0 && firstName.length > 0 && lastName.length > 0 && newType.length > 0;
    }

    function handleSubmit(event) {

        /******************* Need to implement auth check here ******************/

        event.preventDefault();
        // POST request using fetch()
        fetch(`${window.location.protocol}//${window.location.hostname}/users/register/${newType}`, {
          
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
    <div className="Login">
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
        <Form.Group controlId="newType">
            <Form.Label>Type (Admin/Employee)</Form.Label>
            <Form.Control
                type="newType"
                value={newType}
                onChange={(e) => setnewType(e.target.value)}
            />
        </Form.Group>
        <Button className="loginButton" block type="submit" disabled={!validateForm()}>
          Register
        </Button>

        <br></br>
      </Form>
    </div>
  );
}
