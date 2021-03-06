import React, { Component } from "react";
import { useState } from "react";
import {hot} from "react-hot-loader";
import Button from 'react-bootstrap/Button';
import Register from './Register.js';
import Login from './Login.js';
import { Form } from "react-bootstrap";


class App extends Component {
  render(){
    return(
        <div>

            <div className="jumbotron">
                <h1 className="display-4">Hello World</h1>
                <p className="lead">Team Project</p>
                <Button>Example Button</Button>
            </div>
        
            <Login />
        </div>
    );
  }
}

export default hot(module)(App);