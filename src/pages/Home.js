import React, { Component } from 'react';
import SearchBar from '../components/Searchbar/Searchbar';
import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import axios from "axios";

class Home extends Component {
    state = {
        cars:[],
        searchedProducts:[],
        carBrands:[],
        carModels:[],
        carTypes:[]
        
      }
     
      componentDidMount(){
         axios.get(`${window.location.protocol}//${window.location.hostname}/vehicles`).then(response =>{
           this.setState({cars:response.data, searchedProducts:response.data, carBrands:response.data})
         console.log("Data Loaded!")
         console.log(response.data);
         }).catch(err => {
           console.error("Request Not Found!");
         })
         
      }
  
      searched = (inputValue) => {
      
        let searchedProducts = this.state.cars.filter((car) => 
          car.model
          .toLowerCase()
          .includes(inputValue.toLowerCase().trim()) || 
          car.make
          .toLowerCase()
          .includes(inputValue.toLowerCase().trim()) ||
          car.type
          .toLowerCase()
          .includes(inputValue.toLowerCase().trim())
          );

        this.setState({ searchedProducts: searchedProducts });
      }


    
      //Filtering by brand/make 
      optionSelected = (selectedBrand) => {
        let carBrand = this.state.cars.filter((car) => 
          car.make.toLowerCase()
          .includes(selectedBrand.toLowerCase())
        )
        this.setState({ searchedProducts: carBrand });
        this.setState({ carBrands: carBrand})
    
      }

      // Filtering by model
      modelSelected = (models) => {
        let carModel = this.state.carBrands.filter((carBrands) =>
          carBrands.model.toLowerCase()
          .includes(models.toLowerCase())
        )
        this.setState({searchedProducts: carModel});
        this.setState({carModels: carModel})
      }

      // Filtering by type
      typeSelected = (types) => {
        let carType = this.state.carModels.filter((carModels) =>
          carModels.type.toLowerCase()
          .includes(types.toLowerCase())
        )
        this.setState({searchedProducts: carType});
        this.setState({carTypes: carType});
      }

      // Filtering by color
      colorSelected = (userColor) => {
        if(userColor){
          let filteredByColor = this.state.carTypes.filter(car => car.exterior_color === userColor);
          this.setState({searchedProducts:filteredByColor,carTypes:filteredByColor})
        }else{
          this.setState({searchedProducts:this.state.carTypes})
        }
      }

      // Filtering by year
      yearSelected = (userYear) => {
        if(userYear){
          let filteredByYear = this.state.carTypes.filter(car => car.year === userYear);
          this.setState({searchedProducts:filteredByYear,carTypes:filteredByYear})
        }else{
          this.setState({searchedProducts:this.state.carTypes})
        }
        
      }

      // sort 
      sortSelected = (num) =>{
        console.log("num",num);
        switch(num){
          case "1":
              allcars = this.state.cars
              allcars.sort((a, b) => (a.year > b.year) ? 1 : -1)
              allcars.sort((a, b) => (a.year < b.year) ? 1 : (a.year === b.year) ? ((a.size > b.size) ? 1 : -1) : -1 )
              this.setState({searchedProducts:allcars})
            break;
          case "2":
              let allcars = this.state.cars
              allcars.sort((a, b) => (a.year > b.year) ? 1 : -1)
              allcars.sort((a, b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.size > b.size) ? 1 : -1) : -1 )
              this.setState({searchedProducts:allcars})
            break;

          case "3":
             allcars = this.state.cars
            allcars.sort((a, b) => (a.price > b.price) ? 1 : -1)
            allcars.sort((a, b) => (a.price > b.price) ? 1 : (a.price === b.price) ? ((a.size > b.size) ? 1 : -1) : -1 )
            this.setState({searchedProducts:allcars})
          break;

          case "4":
             allcars = this.state.cars
            allcars.sort((a, b) => (a.price > b.price) ? 1 : -1)
            allcars.sort((a, b) => (a.price < b.price) ? 1 : (a.price === b.price) ? ((a.size > b.size) ? 1 : -1) : -1 )
            this.setState({searchedProducts:allcars})
          break;
        }
    }


    render() {
        return(
            <div>
                 <Header />
                 <SearchBar searched={this.searched}/>
                 <Main cartId={this.props.cartId} sortSelected={this.sortSelected} yearSelected={this.yearSelected} modelSelected={this.modelSelected} typeSelected={this.typeSelected} colorSelected={this.colorSelected} carTypes = {this.state.carTypes} carBrands={this.state.carBrands} optionSelected={this.optionSelected} dataCar={this.state.cars} data={this.state.searchedProducts}/>
            </div>        
        )   
    }
}

export default Home;