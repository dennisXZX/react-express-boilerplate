import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          apiResponse: {}
        };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <p>Results from testAPI</p>
                <p className="App-intro">Name: {this.state.apiResponse.name}</p>
                <p className="App-intro">Age: {this.state.apiResponse.age}</p>
            </div>
        );
    }
}

export default App;
