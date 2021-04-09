import requests
import json
with open("data/db.json") as file:
    db = json.load(file)
    data = db["cars"]

    for d in data:
        print(d)
        #data incompatible at the moment

