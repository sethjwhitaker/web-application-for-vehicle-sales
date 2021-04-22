import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AddNewCar() {

    //***********Need to add function for getting IDs from make, type, class*/

    //variables for accepting from form
    const [make, setmake] = useState("");
    const [type, settype] = useState("");
    const [newClass, setnewClass] = useState("");

    //variables after checking for the IDs
    const [makeID, setmakeID] = useState("");
    const [typeID, settypeID] = useState("");
    const [classID, setclassID] = useState("");

    //variables that can be directly added to post request
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
    const [makes, setMakes] = useState(null);
    const [makesLoading, setMakesLoading] = useState(true);

    
    //only allows for button press once all required fields are filled out
    function validateForm() {
        return make.length > 0 && type.length > 0 && newClass.length > 0 && newModel.length > 0 && newYear.length > 0
        && newPrice.length > 0 && newExtColor.length > 0;
    }

    //import makes
    useEffect(async () => {
        const response = await fetch(`${window.location.protocol}//${window.location.hostname}/makes`);
        const data = await response.json();
        makes = data;
        setMakesLoading(false);
        console.log(data);
        console.log(makes);
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
          image: newImage,
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

    return (
        <div className="container">
            {/*if loading is true, display loading
            if editClicked is true, display edit form
            else display full table*/}
            {makesLoading ? 

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
                                <Form.Control as="select">
                                    {makes.map((e) => {
                                        <option 
                                        key={e.id} 
                                        >
                                            {e.name}
                                        </option>
                                    })}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="type">
                            <Form.Label>Type</Form.Label>
                            <Form.Control
                                type="type"
                                value={type}
                                onChange={(e) => settype(e.target.value)}
                            />
                            </Form.Group>

                            <Form.Group controlId="newClass">
                            <Form.Label>Class</Form.Label>
                            <Form.Control
                                type="newClass"
                                value={newClass}
                                onChange={(e) => setnewClass(e.target.value)}
                            />
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
