import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import './Searchbar.css'

class Searchbar extends Component {
  
    state = {
        inputValue:""
    }

    onChangeHandler = (event) => {
        this.setState({inputValue:event.target.value})
        console.log(this.state.inputValue);
    }
    render() {
        
        return(
            <Container className='center form-group'>
                <input onChange={this.onChangeHandler} className="form-control d-inline Searchbar" type="text" typeholder="Search" />
                <button onClick={() => this.props.searched(this.state.inputValue)}>Search</button>    
            </Container>        
        )   
    }
}

export default Searchbar;