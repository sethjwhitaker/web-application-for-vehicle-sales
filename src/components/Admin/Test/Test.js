import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'

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
        e.preventDefault();
        console.log(e.target.getAttribute('value'));
        this.state.idToDelete = e.target.getAttribute('value');
        window.alert(this.state.idToDelete);
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
                <div className="tablediv">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Make ID</th>
                                <th>Make Name</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*loop to display each make on a row*/}
                            {this.state.makes.map((e) => (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>
                                        <Button className="" value={e.id} onClick={this.onDelete} block type="submit">
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
    
}

export default Test;

