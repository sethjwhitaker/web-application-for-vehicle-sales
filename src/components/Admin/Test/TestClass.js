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
            makes: null,
            makes2: [{id: 1, name: 'test1'}, {id: 2, name: 'test2'}],
            deleted: false,
            idToDelete: 0,
          };
    }

    async fetchData() {
        const response = await fetch(`${window.location.protocol}//${window.location.hostname}/makes`, {
            headers: {
            "Content-type": "application/json"
            }
        });
        const data = await response.json();
        this.setState({makes: data, loading: false})
    }

    async componentDidMount() {
        await this.fetchData();
    }

    componentDidUpdate() {
        console.log("Update");
        this.state.makes = this.state.makes2;
        console.log(this.state.makes);
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