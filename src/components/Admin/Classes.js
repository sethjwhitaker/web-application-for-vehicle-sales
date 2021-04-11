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
        return <div>Nothing</div>
        /*
        if (this.state.loading) {
            return <div>loading...</div>
        }

        if (!this.state.person) {
            return <div>Didn't get a person</div>
        }

        return  (
            <div>
                <div>{this.state.person.name.title}</div>
                <div>{this.state.person.name.first}</div>
                <div>{this.state.person.name.last}</div>
                <img src={this.state.person.picture.large} />
            </div>
        );
        */
    }
    
}

export default Classes;