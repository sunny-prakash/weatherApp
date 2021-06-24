import React from "react";
import "./Weatherdetails.css";

export const Weatherdetails = (props) => {
    const { mainData, fullData } = props;
    const { name, sys, wind } = fullData;
    return (
        <div className="info">
            <h1>
                <img src="https://img.icons8.com/fluent/48/000000/foggy-night-1.png" alt="weather" />
                {`   ${name}, ${sys.country}`}
            </h1>
            <div className="details">
                <p>
                    {"Temperature : " + mainData.temp + "°C  "}
                    <img src="https://img.icons8.com/ultraviolet/40/000000/temperature--v2.png" alt="temp" />
                </p>
                <p>
                    {"Minimum temp : " + mainData.temp_min + "°C   "}
                    <img src="https://img.icons8.com/ultraviolet/40/000000/temperature--v2.png" alt="temp" />
                </p>
                <p>
                    {"Maximum temp : " + mainData.temp_max + "°C   "}
                    <img src="https://img.icons8.com/ultraviolet/40/000000/temperature--v2.png" alt="temp" />
                </p>
                <p>
                    {"Humidity : " + mainData.humidity + "%  "}
                    <img src="https://img.icons8.com/plasticine/100/000000/partly-cloudy-day--v2.png" alt="humidity" />
                </p>
                <p>
                    {"Wind : " + wind.speed + "kmph   "}
                    <img src="https://img.icons8.com/color/48/000000/windsock--v2.png" alt="wind" />
                </p>
            </div>
        </div>
    );
};
