import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function handleUpdate(event, id) {
    event.preventDefault();
    console.log(id);
}


export default function MakeUpdateButton() {
    return (
        <Form className="Update" onSubmit={handleUpdate(e.id)}>
            <Button className="UpdateButton" block type="submit">
                Update
            </Button>
        </Form>
    )
}
