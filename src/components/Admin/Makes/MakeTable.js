import React from 'react'
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class MakeTable extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            makes: null,
            deleted: false,
            idToDelete: 0,
          };
        // Binding method
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete = (e) => {
        this.state.idToDelete = e.target.getAttribute('value');

        // POST request using fetch()
        fetch(`${window.location.protocol}//${window.location.hostname}/makes/${this.state.idToDelete}`, {
            
        // Adding method type
        method: "DELETE",
            
        // Adding body or contents to send
        body: JSON.stringify({
            id: this.state.idToDelete
        }),
            
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
    
        // Converting to JSON
        .then(response => response.json())
    
        // Displaying results to console
        .then(json => console.log(json));
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


    render() {
        if (this.state.loading) {
            return <div className= "container-fluid">loading...</div>
        }

        if (!this.state.makes) {
            return <div className= "container-fluid">There are not any makes to display.</div>
        }

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

export default MakeTable;
