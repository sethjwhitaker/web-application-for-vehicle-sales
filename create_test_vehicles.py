import requests
import json

url = "http://localhost:80/vehicles"
with open("data/db.json") as file:
    data = json.load(file)

    #get makes classes types (add them manualy)

    makes = []
    classes = []
    types = []



    d = data[0]
    print(d)

    obj = {
        "make_id": 1,
        "type_id": 1,
        "class_id": 1,
        "model": d.model,
        "year": d.year,
        "price": d.price,
        "exterior_color": d.exterior_color,
        "interior_color": d.interior_color,
        "engine": str(d.engine) + " L",
        "transmission": "6-speed automatic",
        "mileage": "30,000",
        "short_description": d.short_description,
        "description": "Example full description"
    }
        
    response = requests.post(url, data=obj)
    print(response)

