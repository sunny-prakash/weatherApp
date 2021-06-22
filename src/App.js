import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            input: "",
            main: {},
        };
    }
    getdata = (e) => {
        if (e.keyCode !== 13) return;
        this.setState({ input: e.target.value }, this.fetchData);
    };
    fetchData = async () => {
        let res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&units=metric&appid=05a1d98de40020847a5cbd91ec0058ea`);
        let data = await res.json();
        console.log(data);
        this.setState({ data: data, main: data.main });
    };

    render() {
        return (
            <>
                {console.log(this.state.data.main)}
                <input type="text" onKeyDown={this.getdata} name="location" id="location" />
                {this.state.data ? <h1>{this.state.main.temp}</h1> : ""}
            </>
        );
    }
}

export default App;
