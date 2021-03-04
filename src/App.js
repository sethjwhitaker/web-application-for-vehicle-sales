import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Button from 'react-bootstrap/Button';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render(){
    return(
        <div>
          <Navbar />
        
        </div>
    );
  }
}

export default hot(module)(App);
