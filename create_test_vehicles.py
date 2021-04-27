import requests
import json

s = requests.session()

def main():
    url = input("Enter the base url you wish to insert to: ")
    filename = input("Enter the path to the json file you wish to insert: ")
    email = input("Enter admin email: ")
    password = input("Enter admin password: ")
    input("Press enter to insert: ")
    insertVehicles(url, filename, email, password)

def insertVehicles(url, filename, email, password):
    with open(filename) as file:

        login(url, email, password)
       
        data = json.load(file)

        #get makes classes types (add them manualy)

        makes = getItems(url + "/makes")
        classes = getItems(url + "/classes")
        types = getItems(url + "/types")

        for d in data:
            print(d)

            if d["make "] not in makes.keys():
                addItem(url + "/makes", d["make "])
                makes = getItems(url + "/makes")
            if d["type"] not in types.keys():
                addItem(url + "/types", d["type"])
                types = getItems(url + "/types")
            if d["class"] not in classes.keys():
                addItem(url + "/classes", d["class"])
                classes = getItems(url + "/classes")

            obj = {
                "make_id": makes[d["make "]],
                "type_id": types[d["type"]],
                "class_id": classes[d["class"]],
                "model": d["model"],
                "year": d["year"],
                "price": d["price"],
                "exterior_color": d["exterior_color"],
                "interior_color": d["interior_color"],
                "engine": str(d["engine"]) + " L",
                "transmission": "6-speed automatic",
                "mileage": "30,000",
                "short_description": d["short_description"],
                "description": "Example full description"
            }
                
            response = s.post(url + "/vehicles", json=obj)
            print(response)

def login(url, email, password):
    obj = {
        "email": email,
        "password": password
    }
    response = s.post(url + "/users/login", json=obj)
    print(response.json())

def addItem(url, name):
    obj = {
        "name": name
    }

    response = s.post(url, json=obj)
    print(response.json())
    return


def getItems(url):
    response = s.get(url)
    items = {}
    for item in response.json():
        items[item["name"]] = item["id"]
    return items

main()
