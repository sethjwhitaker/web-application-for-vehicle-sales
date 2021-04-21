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
import Cart from './pages/Cart';

class App extends Component {
    state = {
        userData: {},
        isLoggedIn: false
    }

    onLogin(userData) {
        console.log("Logged In");
        this.setState({userData:userData, isLoggedIn:true});
    }
  render(){
    return(      
      <div className="jumbotron">
        <HashRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path ='/' component={Home} exact />
              <Route path ='/login' render={(props) => (<Login {...props} onLogin={this.onLogin.bind(this)} />)} />
              <Route path = '/logout' component={Logout} />
              <Route path ='/register' component={Register} />
              <Route path='/admin' component={Admin_Interface} />
              <Route path='/car/:id' component={CarInfo} />
              <Route path='/part/:id' component={PartInfo} />
              <Route path='/financing' component={Finance} />
              <Route path='/cart' render={(props) => (<Cart {...props} userData={this.state.userData} />)} />
            </Switch>
          </div>
        </HashRouter>
        <Footer />
      </div>
      
    );
  }
}

export default hot(module)(App);
