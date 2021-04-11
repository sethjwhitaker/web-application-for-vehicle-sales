import React from 'react'
import 'regenerator-runtime/runtime';


class Classes extends React.Component {

    state = {
        loading: true,
        makes: null,
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response =  await fetch(`${window.location.protocol}//${window.location.hostname}/makes`, {

            headers: {
            "Content-type": "application/json"
            }
        });
        const data = await response.json();
        this.setState({makes: data, loading: false})
        console.log(data[0].id);
        console.log(data[0].name);
        
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }

        if (!this.state.person) {
            return <div>There are not any makes to display.</div>
        }

        return  (
            <div>
                <div>{this.state[0].id}</div>
                <div>{this.state[0].name}</div>
                <div>{this.state[1].id}</div>
                <div>{this.state[2].name}</div>
            </div>
        );
    }
    
}

export default Classes;
