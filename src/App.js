import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin_Interface from './components/Admin/Admin_Interface.js';
import Home from './pages/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

class App extends Component {
  render(){
    return(      
      <div className="jumbotron">
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path ='/' component={Home} exact />
              <Route path ='/login' component={Login} />
              <Route path ='/register' component={Register} />
              <Route path='/admin' component={Admin_Interface} />
            </Switch>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
      
    );
  }
}

export default hot(module)(App);
