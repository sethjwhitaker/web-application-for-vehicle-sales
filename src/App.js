import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Button from 'react-bootstrap/Button';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

class App extends Component {
  render(){
    return(
        <div>
          <Navbar />
          <Header></Header>
        
        </div>
    );
  }
}

export default hot(module)(App);
