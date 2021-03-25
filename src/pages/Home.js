import React, { Component } from 'react';
import SearchBar from '../components/Searchbar/Searchbar';
import Main from '../components/Main/Main';
import Header from '../components/Header';
import axios from "axios";

class Home extends Component {
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

    render() {
        return(
            <div>
                 <Header />
                 <SearchBar searched={this.searched}/>
                 <Main modelSelected={this.modelSelected} carBrands={this.state.carBrands} optionSelected={this.optionSelected} dataCar={this.state.cars}data={this.state.searchedProducts}/>
            </div>        
        )   
    }
}

export default Home;