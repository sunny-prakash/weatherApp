import React, { Component } from "react";
import { Weatherdetails } from "./components/Weatherdetails/Weatherdetails";
import "./App.css";
import bootstrap from "bootstrap";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            input: "",
            main: {},
        };
    }
    async componentDidMount() {
        await this.getLocation();
        await this.fetchData();
    }
    getLocation = async () => {
        let res = await fetch(`https://ipinfo.io?token=de7af4bf74d5cb`);
        let data = await res.json();
        await this.setState({ input: data.city, placeInfo: data });
    };
    getdata = async (e) => {
        if (e.keyCode !== 13) return;
        await this.setState({ input: e.target.value });
        this.fetchData();
    };
    fetchData = async () => {
        let res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&units=metric&appid=05a1d98de40020847a5cbd91ec0058ea`);
        let data = await res.json();
        // console.log(data);
        let fulldata = [data];
        console.log(fulldata);
        await this.setState({ data: fulldata, main: data.main });
    };

    render() {
        return (
            <>
                <div id="main" className="App">
                    <h1 style={{ textDecoration: "underline" }}>Weather App</h1>
                    <label className="input_label" htmlFor="location">
                        {"Enter your city to know the weather : "}
                    </label>
                    <input className="input_box" type="text" onKeyDown={this.getdata} name="location" id="location" />
                    {this.state.data.length ? <Weatherdetails fullData={this.state.data[0]} mainData={this.state.main} /> : ""}
                </div>
            </>
        );
    }
}

export default App;
