import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'
import Test1 from './Test1';

class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            makes: [{id: 1, name: 'test1'}, {id: 2, name: 'test2'}],
            deleted: false,
            idToDelete: 0,
          };
        // Binding method
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete = (e) => {
        this.state.idToDelete = e.target.getAttribute('value');
        window.alert("Deleted");
        console.log(2);
        this.forceUpdate();
    }

    render() {        
        /*
        if (this.state.loading) {
            return <div className= "container-fluid">loading...</div>
        }

        if (!this.state.makes) {
            return <div className= "container-fluid">There are not any makes to display.</div>
        }
        */

        return  (
            <div className = "container-fluid">
                <h2>Makes List</h2>
                <p>Note: Makes cannot be deleted if they exist in either sales history or current inventory.</p>
                <Test1></Test1>
            </div>
        );
    }
    
}

export default Test;

