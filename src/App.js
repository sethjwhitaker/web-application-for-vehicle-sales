import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Button from 'react-bootstrap/Button';

class App extends Component {
  render(){
    return(
        <div>

            <div class="jumbotron">
                <h1 class="display-4">Hello World</h1>
                <p class="lead">Team Project</p>
                <Button>Example Button</Button>
            </div>
        
        </div>
    );
  }
}

export default hot(module)(App);