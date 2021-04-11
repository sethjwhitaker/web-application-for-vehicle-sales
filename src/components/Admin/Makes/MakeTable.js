import React from 'react'
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function updateSubmit(e, id) {
    e.preventDefault();
    console.log(id);
}

function updateDelete(id) {
    e.preventDefault();
    console.log(id);
}

class MakeTable extends React.Component {

    state = {
        loading: true,
        makes: null,
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
                <div className="tablediv">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Make ID</th>
                                <th>Make Name</th>
                                <th>Update?</th>
                                <th>Delete?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*loop to display each make on a row*/}
                            {this.state.makes.map((e) => (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>
                                        <Form className="Update" onSubmit={updateSubmit(e.id)}>
                                            <Button className="UpdateButton" block type="submit">
                                                Update
                                            </Button>
                                        </Form>
                                    </td>
                                    <td>
                                        <Form className="Delete" onSubmit={updateDelete(e.id)}>
                                            <Button className="DeleteButton" block type="submit">
                                                Delete
                                            </Button>
                                        </Form>
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
