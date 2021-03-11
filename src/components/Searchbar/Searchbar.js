import React, { Component } from 'react';
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
            <div className='center'>
                 <input onChange={this.onChangeHandler} className="Searcbar" type="text" typeholder="Search" />
                 <button onClick={() => this.props.searched(this.state.inputValue)}>Search</button>    
            </div>        
        )   
    }
}

export default Searchbar;