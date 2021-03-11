import React, { Component } from 'react';

class Home extends Component {
    render() {
        return(
            <div>
                 <Header />
                 <SearchBar />
                 <Main />
            </div>        
        )   
    }
}

export default Home;