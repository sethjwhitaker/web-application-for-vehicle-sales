import React from 'react'
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./admin.css"


class Classes extends React.Component {

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
            return <div>loading...</div>
        }

        if (!this.state.makes) {
            return <div>There are not any makes to display.</div>
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
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {/*test makes returns*/}
                    <div>{this.state.makes[0].id}</div>
                    <div>{this.state.makes[0].name}</div>
                    <div>{this.state.makes[1].id}</div>
                    <div>{this.state.makes[1].name}</div>
                </div>
            </div>
        );
    }
    
}

export default Classes;
