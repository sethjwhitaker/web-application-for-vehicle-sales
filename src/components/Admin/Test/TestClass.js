import React from "react";
import Button from "react-bootstrap/Button";
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'
import Test1 from './Test1';

class TestClass extends React.Component {
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
        console.log(this.state.idToDelete);
    }

    render() {
        return  (
            <div className = "container-fluid">
                <h2>Makes List</h2>
                <p>Note: Makes cannot be deleted if they exist in either sales history or current inventory.</p>
                <div className="tablediv">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Make ID</th>
                                <th>Make Name</th>
                                <th>Edit</th>
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

export default TestClass;