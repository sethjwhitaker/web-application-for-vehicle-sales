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
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class App extends Component {
    state = {
        userData: {},
        cart: {},
        isLoggedIn: false
    }

    componentDidMount() {
        this.getCart();
    }

    onLogin(userData) {
        console.log("Logged In");
        this.setState({userData:userData, isLoggedIn:true});
    }

    // In order to add items to cart, we need to get the cart first, which means it has to be called when the app loads
    async getCart() {
        const options = {
            method: 'GET'
        }

        try {
            const response = await fetch(`${window.location.protocol}//${window.location.hostname}/cart`, options);
            const data = await response.json();
            if(data.id) { // there is a cart
                this.setState({cart:data});
                console.log(data);
            } else {
                if(this.state.isLoggedIn) this.createCart();
            }
        } catch(e) {
            console.error(e);
        }
    }

    async createCart() {
        console.log("Creating Cart");
        console.log(this.props.userData);

        const options = {
            method: 'POST',
            body: JSON.stringify({
                user_id: this.props.userData.user_id,
                sale_items: []
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };

        try {
            const response = await fetch(`${window.location.protocol}//${window.location.hostname}/sales`, options);
            const data = await response.json();
            console.log(data);
            // check message
        } catch(e) {
            console.error(e);
        }
    }

  render(){
    return(      
      <div className="jumbotron">
        <HashRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path ='/' render={(props) => (<Home {...props} cartId={this.state.cart.id} />)} exact />
              <Route path ='/login' render={(props) => (<Login {...props} onLogin={this.onLogin.bind(this)} />)} />
              <Route path = '/logout' component={Logout} />
              <Route path ='/register' component={Register} />
              <Route path='/admin' component={Admin_Interface} />
              <Route path='/car/:id' component={CarInfo} />
              <Route path='/part/:id' component={PartInfo} />
              <Route path='/financing' component={Finance} />
              <Route path='/cart' render={(props) => (<Cart {...props} getCart={this.getCart.bind(this)} loggedIn={this.state.isLoggedIn} cart={this.state.cart} />)} />
            </Switch>
          </div>
        </HashRouter>
        <Footer />
      </div>
      
    );
  }
}

export default hot(module)(App);
