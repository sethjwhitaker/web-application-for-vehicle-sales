import React from 'react'
import 'regenerator-runtime/runtime';
import Table from 'react-bootstrap/Table'

class ClassTable extends React.Component {

    state = {
        loading: true,
        classes: null,
    }

    async componentDidMount() {
        const response =  await fetch(`${window.location.protocol}//${window.location.hostname}/classes`, {
            headers: {
            "Content-type": "application/json"
            }
        });
        const data = await response.json();
        this.setState({classes: data, loading: false})
        console.log(data)
    }

    render() {
        if (this.state.loading) {
            return <div className= "container-fluid">loading...</div>
        }

        if (!this.state.classes) {
            return <div className= "container-fluid">There are not any classes to display.</div>
        }

        return  (
            <div className = "container-fluid">
                <h2>Classes List</h2>
                <div className="tablediv">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Class ID</th>
                                <th>Class Name</th>
                                <th>Update?</th>
                                <th>Delete?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*loop to display each class on a row*/}
                            {this.state.classes.map((e) => (
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

export default ClassTable;
