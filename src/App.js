import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Admin_Interface from './components/Admin/Admin_Interface.js';

class App extends Component {
  

  //Rendering
  render(){
    return(      
      <div>
          
         <Admin_Interface />
            
      </div>
      

    );
  }
}


export default hot(module)(App);
