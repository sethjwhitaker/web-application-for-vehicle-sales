import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SearchBar from './components/Searchbar/Searchbar';
import Main from './components/Main/Main';
import Header from './components/Header';
import Admin_Interface from './components/Admin/Admin_Interface.js';
import axios from "axios"

class App extends Component {
  
  state = {
    cars:[],
    searchedProducts:[],
    carBrands:[]
    
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


  //Searching -> Searchbar
  searched = (inputValue) => {
    let searchedProducts = this.state.cars.filter((product) =>
      product.brand
        .toLowerCase()
        .includes(inputValue.toLowerCase().trim())
    );
    this.setState({ searchedProducts: searchedProducts });

  }

  //Filtering by brand -> Sidebar
  optionSelected = (selectedBrand) => {
    let carBrand = this.state.cars.filter((car) => 
      car.brand.toLowerCase()
      .includes(selectedBrand.toLowerCase())
    )
    this.setState({ searchedProducts: carBrand });
    this.setState({carBrands: carBrand})

  }

  modelSelected = (models)=> {
    axios.get(`http://localhost:8000/cars?model=${models}`).
    then(response => this.setState({searchedProducts:response.data}))
  } 


  //Rendering
  render(){
    return(      
      <div>
          <div>
                 <Navbar />
                 <Header />
                 <SearchBar searched={this.searched}/>
                 <Main modelSelected={this.modelSelected} carBrands={this.state.carBrands} optionSelected={this.optionSelected} dataCar={this.state.cars}data={this.state.searchedProducts}/>
                 <Admin_Interface />
                 <Footer />
            </div>  
      </div>
      

    );
  }
}


export default hot(module)(App);
