import React from "react";
import "./styles.css";


export default function App() {
  return (
    <h2 id="date">May 12, 2021<small></small></h2>

    <div className="weather"></div>

    <div className="weather-icon"><img id="icon" /></div>

    <div className="temperature">
      <p id="temp">24</p>
      <span className="units">
        <a href="#" id="celsius-link" class="active">°C</a> |
        <a href="#" id="fahrenheit-link"> °F </a>
      </span>
    </div>

    <div className="location">
      <h1 id="city">Lima</h1>
    </div>

    <div id="description">
      <h3>Cloudy</h3>
    </div>

    <div className="details">
      <div className="col-6">
        <p id="humidity"></p>
        <p>Humidity: 80%<span id="humidity"></span></p>
      </div>

      <div className="col-6">
        <p id="wind"></p>
        <p>
          Wind Speed:
          <span id="windspeed"> 12 km/hr </span>
        </p>
      </div>

    




        
      

  );
}
