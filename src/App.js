import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { HashRouter, Route, Switch } from 'react-router-dom';
import Admin_Interface from './components/Admin/Admin_Interface.js';
import Home from './pages/Home';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import Register from './components/Login/Register';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CarInfo from './pages/Info/CarInfo';
import PartInfo from './pages/Info/PartInfo';
import Finance from './pages/finance/Finance';

class App extends Component {
  render(){
    return(      
      <div className="jumbotron">
        <HashRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path ='/' component={Home} exact />
              <Route path ='/login' component={Login} />
              <Route path = '/logout' component={Logout} />
              <Route path ='/register' component={Register} />
              <Route path='/admin' component={Admin_Interface} />
              <Route path='/car/:id' component={CarInfo} />
              <Route path='/part' component={PartInfo} />
              <Route path='/financing' component={Finance} />
            </Switch>
          </div>
        </HashRouter>
        <Footer />
      </div>
      
    );
  }
}

export default hot(module)(App);
