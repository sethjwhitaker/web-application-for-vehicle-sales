import React from 'react'
import Table from 'react-bootstrap/Table'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./admin.css"

export default function DisplaySalesHistory() {

    function updateSubmit(event) {
    }

    function updateDelete(event) {
    }
    

    return (
        <div className = "container-fluid">
            <h2>Sales History</h2>

            <div className="tablediv">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Vehicle ID</th>
                        <th>Quantity</th>
                        <th>Order Status</th>
                        <th>Date</th>
                        <th>Customer Address</th>
                        <th>Update?</th>
                        <th>Delete?</th>
                    </tr>
                </thead>
                <tbody>                                        
                    {/*foreach loop to display here*/}

                    {/*below is filler to show table formatting when filled*/}
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>Completed</td>
                        <td>01/01/2021</td>
                        <td>123 Main Street, Citytown KS, 55555</td>
                        <td>
                            <Form className="Update" onSubmit={updateSubmit}>
                                <Button className="UpdateButton" block type="submit">
                                    Update
                                </Button>
                            </Form>
                        </td>
                        <td>
                            <Form className="Delete" onSubmit={updateDelete}>
                                <Button className="DeleteButton" block type="submit">
                                    Delete
                                </Button>
                            </Form>
                        </td>
                    </tr>
                    

                    {/*Below this is filler for table only*/}
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                            <Form className="Update" onSubmit={updateSubmit}>
                                <Button className="UpdateButton" block type="submit">
                                    Update
                                </Button>
                            </Form>
                        </td>
                        <td>
                            <Form className="Delete" onSubmit={updateDelete}>
                                <Button className="DeleteButton" block type="submit">
                                    Delete
                                </Button>
                            </Form>
                        </td>
                    </tr>

                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                            <Form className="Update" onSubmit={updateSubmit}>
                                <Button className="UpdateButton" block type="submit">
                                    Update
                                </Button>
                            </Form>
                        </td>
                        <td>
                            <Form className="Delete" onSubmit={updateDelete}>
                                <Button className="DeleteButton" block type="submit">
                                    Delete
                                </Button>
                            </Form>
                        </td>
                    </tr>

                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                            <Form className="Update" onSubmit={updateSubmit}>
                                <Button className="UpdateButton" block type="submit">
                                    Update
                                </Button>
                            </Form>
                        </td>
                        <td>
                            <Form className="Delete" onSubmit={updateDelete}>
                                <Button className="DeleteButton" block type="submit">
                                    Delete
                                </Button>
                            </Form>
                        </td>
                    </tr>

                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                            <Form className="Update" onSubmit={updateSubmit}>
                                <Button className="UpdateButton" block type="submit">
                                    Update
                                </Button>
                            </Form>
                        </td>
                        <td>
                            <Form className="Delete" onSubmit={updateDelete}>
                                <Button className="DeleteButton" block type="submit">
                                    Delete
                                </Button>
                            </Form>
                        </td>
                    </tr>

                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                            <Form className="Update" onSubmit={updateSubmit}>
                                <Button className="UpdateButton" block type="submit">
                                    Update
                                </Button>
                            </Form>
                        </td>
                        <td>
                            <Form className="Delete" onSubmit={updateDelete}>
                                <Button className="DeleteButton" block type="submit">
                                    Delete
                                </Button>
                            </Form>
                        </td>
                    </tr>

                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                            <Form className="Update" onSubmit={updateSubmit}>
                                <Button className="UpdateButton" block type="submit">
                                    Update
                                </Button>
                            </Form>
                        </td>
                        <td>
                            <Form className="Delete" onSubmit={updateDelete}>
                                <Button className="DeleteButton" block type="submit">
                                    Delete
                                </Button>
                            </Form>
                        </td>
                    </tr>

                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                            <Form className="Update" onSubmit={updateSubmit}>
                                <Button className="UpdateButton" block type="submit">
                                    Update
                                </Button>
                            </Form>
                        </td>
                        <td>
                            <Form className="Delete" onSubmit={updateDelete}>
                                <Button className="DeleteButton" block type="submit">
                                    Delete
                                </Button>
                            </Form>
                        </td>
                    </tr>

                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                            <Form className="Update" onSubmit={updateSubmit}>
                                <Button className="UpdateButton" block type="submit">
                                    Update
                                </Button>
                            </Form>
                        </td>
                        <td>
                            <Form className="Delete" onSubmit={updateDelete}>
                                <Button className="DeleteButton" block type="submit">
                                    Delete
                                </Button>
                            </Form>
                        </td>
                    </tr>

                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                            <Form className="Update" onSubmit={updateSubmit}>
                                <Button className="UpdateButton" block type="submit">
                                    Update
                                </Button>
                            </Form>
                        </td>
                        <td>
                            <Form className="Delete" onSubmit={updateDelete}>
                                <Button className="DeleteButton" block type="submit">
                                    Delete
                                </Button>
                            </Form>
                        </td>
                    </tr>

                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                            <Form className="Update" onSubmit={updateSubmit}>
                                <Button className="UpdateButton" block type="submit">
                                    Update
                                </Button>
                            </Form>
                        </td>
                        <td>
                            <Form className="Delete" onSubmit={updateDelete}>
                                <Button className="DeleteButton" block type="submit">
                                    Delete
                                </Button>
                            </Form>
                        </td>
                    </tr>

                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                            <Form className="Update" onSubmit={updateSubmit}>
                                <Button className="UpdateButton" block type="submit">
                                    Update
                                </Button>
                            </Form>
                        </td>
                        <td>
                            <Form className="Delete" onSubmit={updateDelete}>
                                <Button className="DeleteButton" block type="submit">
                                    Delete
                                </Button>
                            </Form>
                        </td>
                    </tr>


                </tbody>
            </Table>
            </div>
        </div>
    )
}
