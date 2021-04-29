import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Products from '../components/Main/Products/Products';

class Parts extends Component {

    state = {
        parts: []
    }

    componentDidMount() {
        this.getParts();
    }

    async getParts() {
        const options = {
            method: 'GET'
        }

        try {
            const response = await fetch(`${window.location.protocol}//${window.location.hostname}/parts`, options);
            if (response.status == 200) {
                const data = await response.json();
                this.setState({parts:data});
                console.log(data);
            } 

        } catch(e) {
            console.error(e);
        }
    }

    render() {
        return (
        <div>
            <Header />
            <Products cartId={this.props.cartId} data={this.state.parts} isCar={false} />
        </div>
        );
    }
}

export default Parts;