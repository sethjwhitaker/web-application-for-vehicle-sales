import React, { Component } from "react";
import styles from "./login.css";


class Logout extends Component {
    
    state = {
        message: "Logging out ..."
    }
    

    componentDidMount() {
        this.logout();
    }

    async logout() {
        const options = {
            method: "POST",
            //body: JSON.stringify({}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };


        try {
            
            const response = await fetch(`${window.location.protocol}//${window.location.hostname}/users/logout`, options);
            const data = await response.json();
            
            this.setState({message: data.message});
            if(response.status == 200 || response.status == 400) this.props.onLogout();

        } catch (e) {
            console.log(e);
            this.setState({message: "An error occurred while logging out."})
        }
    }

    render() {
        return (
            <div className="container Login">
                <h2>{this.state.message}</h2>
            </div>
        );
    }
}

export default Logout;