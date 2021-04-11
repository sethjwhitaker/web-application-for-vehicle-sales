import React from 'react'
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'

class TypeTable extends React.Component {

    state = {
        loading: true,
        types: null,
    }

    async componentDidMount() {
        const response =  await fetch(`${window.location.protocol}//${window.location.hostname}/types`, {
            headers: {
            "Content-type": "application/json"
            }
        });
        const data = await response.json();
        this.setState({types: data, loading: false})
    }

    render() {
        if (this.state.loading) {
            return <div class= "container-fluid">loading...</div>
        }

        if (!this.state.types) {
            return <div class= "container-fluid">There are not any types to display.</div>
        }

        return  (
            <div className = "container-fluid">
                <h2>Types List</h2>
                <div className="tablediv">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Type ID</th>
                                <th>Type Name</th>
                                <th>Update?</th>
                                <th>Delete?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*loop to display each type on a row*/}
                            {this.state.types.map((e) => (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
    
}

export default TypeTable;
