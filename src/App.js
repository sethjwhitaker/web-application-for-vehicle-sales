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
import Checkout from './pages/Checkout/Checkout';
import Success from './pages/Checkout/Success';
import Parts from './pages/Parts';
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class App extends Component {
    state = {
        userData: {},
        cart: {},
        isLoggedIn: false
    }

    componentDidMount() {
        // read logged in cache
        const ud = window.localStorage.getItem("userData");
        if(ud) this.setState({userData: JSON.parse(ud)});
        if(window.localStorage.getItem("IsLoggedIn")=="True")this.setState({isLoggedIn:true});

        this.checkLoggedIn();
        this.getCart();
    }

    async checkLoggedIn() {
        const response = await fetch(`${window.location.protocol}//${window.location.hostname}/users/isLoggedIn`);
        if(response.status == 401) {
            console.log("Not logged in.");
            this.onLogout();
        } else if (response.status == 200) {
            console.log("Logged In.");
        }
    }

    onLogin(userData) {
        console.log("Logged In");
        window.localStorage.setItem("IsLoggedIn", "True");
        window.localStorage.setItem("userData", JSON.stringify(userData));
        this.setState({userData:userData, isLoggedIn:true});
        this.getCart();
    }

    onLogout() {
        console.log("Logged Out");
        window.localStorage.removeItem("IsLoggedIn");
        window.localStorage.removeItem("userData");
        this.setState({userData:{}, isLoggedIn:false});
    }

    // In order to add items to cart, we need to get the cart first, which means it 
    // has to be called when the app loads or when the first item is added
    async getCart() {
        const options = {
            method: 'GET'
        }

        try {
            const response = await fetch(`${window.location.protocol}//${window.location.hostname}/cart`, options);
            const data = await response.json();
            if(data.id) { // there is a cart
                console.log("Cart Found");
                this.setState({cart:data});
                console.log(data);
            } else {
                console.log("Cart not found");
                if(this.state.isLoggedIn) this.createCart();
            }
        } catch(e) {
            console.error(e);
        }
    }

    // If there is no cart, we must create one
    async createCart() {
        console.log("Creating Cart");
        console.log(this.state.userData);

        const options = {
            method: 'POST',
            body: JSON.stringify({
                user_id: this.state.userData.user_id,
                sale_items: []
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };

        try {
            const response = await fetch(`${window.location.protocol}//${window.location.hostname}/sales`, options);
            const data = await response.json();
            if(response.status == 200) {
                this.getCart();
            }
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
              
            <Navbar
            loggedIn={this.state.isLoggedIn}
            userInfo={this.state.userData}
            />

            <Switch>
              <Route path ='/' render={(props) => (<Home {...props} cartId={this.state.cart.id} />)} exact />
              <Route path ='/login' render={(props) => (<Login {...props} onLogin={this.onLogin.bind(this)} />)} />
              <Route path = '/logout' render={(props) => (<Logout {...props} onLogout={this.onLogout.bind(this)} />)} />
              <Route path ='/register' component={Register} />
              <Route path='/admin' component={Admin_Interface} />
              <Route path='/car/:id' component={CarInfo} />
              <Route path='/part/:id' component={PartInfo} />
              <Route path='/financing' component={Finance} />
              <Route path='/cart' render={(props) => (<Cart {...props} getCart={this.getCart.bind(this)} loggedIn={this.state.isLoggedIn} cart={this.state.cart} />)} />
              <Route path='/checkout' render={(props) => (<Checkout {...props} cart={this.state.cart} createCart={this.createCart.bind(this)} />)} />
              <Route path='/receipt' component={Success} /> 
              <Route path='/parts' render={(props) => (<Parts {...props} cartId={this.state.cart.id} />)} />
            </Switch>
          </div>
        </HashRouter>
        <Footer />
      </div>
      
    );
  }
}

export default hot(module)(App);
