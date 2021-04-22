import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AddNewCar() {
    //plain variables
    const [makeID, setmakeID] = useState(null);
    const [typeID, settypeID] = useState(null);
    const [classID, setclassID] = useState(null);
    const [newModel, setnewModel] = useState("");
    const [newYear, setnewYear] = useState("");
    const [newPrice, setnewPrice] = useState("");
    const [newExtColor, setnewExtColor] = useState("");
    const [newIntColor, setnewIntColor] = useState("");
    const [newEngine, setnewEngine] = useState("");
    const [newTransmission, setnewTransmission] = useState("");
    const [newMilage, setnewMilage] = useState("");
    const [newShortDescription, setnewShortDescription] = useState("");
    const [newDescription, setnewDescription] = useState("");

    //objects returned from api call
    const [makes, setMakes] = useState(null);
    const [types, setTypes] = useState(null);
    const [classes, setClasses] = useState(null);

    //loading variables
    const [makesLoading, setMakesLoading] = useState(true);
    const [typesLoading, setTypesLoading] = useState(true);
    const [classesLoading, setClassesLoading] = useState(true);

    
    //only allows for button press once all required fields are filled out
    function validateForm() {
        return newModel.length > 0 && newYear.length > 0
        && newPrice.length > 0 && newExtColor.length > 0;
    }

    //import makes
    useEffect(async () => {
        const response = await fetch(`${window.location.protocol}//${window.location.hostname}/makes`);
        const data = await response.json();
        setMakes(data);
        setMakesLoading(false);
    }, []);

    //import types
    useEffect(async () => {
        const response = await fetch(`${window.location.protocol}//${window.location.hostname}/types`);
        const data = await response.json();
        setTypes(data);
        setTypesLoading(false);
    }, []);

    //import classes
    useEffect(async () => {
        const response = await fetch(`${window.location.protocol}//${window.location.hostname}/classes`);
        const data = await response.json();
        setClasses(data);
        setClassesLoading(false);
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        // POST request using fetch()
        fetch(`${window.location.protocol}//${window.location.hostname}/vehicles`, {
          
        // Adding method type
        method: "POST",
          
        // Adding body or contents to send
        body: JSON.stringify({
          make_id: makeID,
          type_id: typeID,
          class_id: classID,
          model: newModel,
          year: newYear,
          price: newPrice,
          exterior_color: newExtColor,
          interior_color: newIntColor,
          engine: newEngine,
          transmission: newTransmission,
          mileage: newMilage,
          short_description: newShortDescription,
          description: newDescription,
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

      window.alert("Add Request Sent");
    }

    return (
        <div className="container">
            {/*if loading is true, display loading
            else display full table*/}
            {makesLoading || classesLoading || typesLoading ? 

                //render loading
                <div className = "container-fluid"> loading...</div>
                
                //else
                :
            
                <div>

                    <h2>Add New Vehicle</h2>
                    <div className="VehicleForm">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="make">
                                <Form.Label>Make</Form.Label>
                                <Form.Control as="select"
                                onChange={(e) => setmakeID(e.target.value)}>
                                    <option>-</option>
                                    {makes.map((e, index) => {
                                        return (<option key={index} value={e.id}>{e.name}</option>)
                                    })}
                                    
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="type">
                                <Form.Label>Type</Form.Label>
                                <Form.Control as="select"
                                onChange={(e) => settypeID(e.target.value)}>
                                    <option>-</option>
                                    {types.map((e, index) => {
                                        return (<option key={index} value={e.id}>{e.name}</option>)
                                    })}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="class">
                                <Form.Label>Class</Form.Label>
                                <Form.Control as="select"
                                onChange={(e) => setclassID(e.target.value)}>
                                    <option>-</option>
                                    {classes.map((e, index) => {
                                        return (<option key={index} value={e.id}>{e.name}</option>)
                                    })}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="newModel">
                            <Form.Label>Model</Form.Label>
                            <Form.Control
                                type="newModel"
                                value={newModel}
                                onChange={(e) => setnewModel(e.target.value)}
                            />
                            </Form.Group>

                            <Form.Group controlId="newYear">
                            <Form.Label>Year</Form.Label>
                            <Form.Control
                                type="newYear"
                                value={newYear}
                                onChange={(e) => setnewYear(e.target.value)}
                            />
                            </Form.Group>

                            <Form.Group controlId="newPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="newPrice"
                                value={newPrice}
                                onChange={(e) => setnewPrice(e.target.value)}
                            />
                            </Form.Group>

                            <Form.Group controlId="newExtColor">
                            <Form.Label>Exterior Color</Form.Label>
                            <Form.Control
                                type="newExtColor"
                                value={newExtColor}
                                onChange={(e) => setnewExtColor(e.target.value)}
                            />
                            </Form.Group>

                            <Form.Group controlId="newShortDescription">
                            <Form.Label>Short Description</Form.Label>
                            <Form.Control
                                type="newShortDescription"
                                value={newShortDescription}
                                onChange={(e) => setnewShortDescription(e.target.value)}
                            />
                            </Form.Group>

                            <Form.Group controlId="newIntColor">
                            <Form.Label>Interior Color (optional)</Form.Label>
                            <Form.Control
                                type="newIntColor"
                                value={newIntColor}
                                onChange={(e) => setnewIntColor(e.target.value)}
                            />
                            </Form.Group>

                            <Form.Group controlId="newEngine">
                            <Form.Label>Engine (optional)</Form.Label>
                            <Form.Control
                                type="newEngine"
                                value={newEngine}
                                onChange={(e) => setnewEngine(e.target.value)}
                            />
                            </Form.Group>

                            <Form.Group controlId="newTransmission">
                            <Form.Label>Transmission (optional)</Form.Label>
                            <Form.Control
                                type="newTransmission"
                                value={newTransmission}
                                onChange={(e) => setnewTransmission(e.target.value)}
                            />
                            </Form.Group>

                            <Form.Group controlId="newMilage">
                            <Form.Label>Mileage (optional)</Form.Label>
                            <Form.Control
                                type="newMilage"
                                value={newMilage}
                                onChange={(e) => setnewMilage(e.target.value)}
                            />
                            </Form.Group>

                            <Form.Group controlId="newDescription">
                            <Form.Label>Full Description (optional)</Form.Label>
                            <Form.Control
                                type="newDescription"
                                value={newDescription}
                                onChange={(e) => setnewDescription(e.target.value)}
                            />
                            </Form.Group>

                            <Button className="" block type="submit" disabled={!validateForm()}>
                                Add
                            </Button>
                        </Form>
                    </div>
                </div>
            } {/*end ternary statement */}
        </div>
                        
    )
}
