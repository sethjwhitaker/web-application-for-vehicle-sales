import React, { Component } from "react";
import { useState } from "react";
import {hot} from "react-hot-loader";
import Button from 'react-bootstrap/Button';
import Register from './Register.js';
import Login from './Login.js';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header';
import { Form } from "react-bootstrap";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header';

class App extends Component {
  render(){
    return(
        <div className="jumbotron">
            <div>
                <Navbar />
                <Header />
            </div>
        </div>
    );
  }
}

export default hot(module)(App);
