import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import Main from './components/Main/Main';
import Header from './components/Header';
import axios from "axios"

class App extends Component {
  
  state = {
    cars:[],
    searchedProducts:[]

  }
 
  componentDidMount(){
     axios.get('http://localhost:8000/cars').then(response =>{
       this.setState({cars:response.data, searchedProducts:response.data})
     console.log("Data Loaded!")
     console.log(response.data);
     }).catch(err => {
       console.error("Request Not Found!");
     })
     
  }

  searched = (inputValue) => {
    let searchedProducts = this.state.cars.filter((product) =>
      product.brand
        .toLowerCase()
        .includes(inputValue.toLowerCase().trim())
    );
    this.setState({ searchedProducts: searchedProducts });

    console.log(inputValue);

  }

  optionSelected = (selectedBrand) => {
    
    let a = this.state.cars.filter((car) => 
      car.brand.toLowerCase()
      .includes(selectedBrand.toLowerCase())
    )
    this.setState({ searchedProducts: a });
    console.log(this.state.searchedProducts);
    console.log(a);
  }

  render(){
    return(      
      <div>
          <div>
                 <Navbar />
                 <Header />
                 <SearchBar searched={this.searched}/>
                 <Main optionSelected={this.optionSelected} dataCar={this.state.cars}data={this.state.searchedProducts}/>
                 <Footer />
            </div>  
      </div>
      
    );
  }
}

export default hot(module)(App);
