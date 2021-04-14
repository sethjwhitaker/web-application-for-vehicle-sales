import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'
import Test from './Test';

class TestClass extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            make1: null,
            deleted: false,
            idToDelete: 0,
          };
        // Binding method
        this.onDelete = this.onDelete.bind(this);
    }

    async componentDidMount() {
        const response =  await fetch(`${window.location.protocol}//${window.location.hostname}/makes`, {
            headers: {
            "Content-type": "application/json"
            }
        });
        const data = await response.json();
        this.setState({makes: data, loading: false})
    }

    componentDidUpdate() {
        console.log("Update");
        this.state.makes = this.state.makes2;
        console.log(this.state.makes);
    }

    onDelete = (e) => {
        this.state.idToDelete = e.target.getAttribute('value');
        console.log(this.state.idToDelete);
    }

    render() {
        if (this.state.loading) {
            return <div className= "container-fluid">loading...</div>
        }

        if (!this.state.makes) {
            return <div className= "container-fluid">There are not any makes to display.</div>
        }

        return  (
            <div>
                <button onClick={e => {
                    this.setState({idToDelete: this.state.idToDelete + 1});
                }}>Click</button>
                <Test makes={this.state.makes}/>
            </div>
        );
    }
}

export default TestClass;