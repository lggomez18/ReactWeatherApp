import React from "react";
import City from "./city";
import Weather from "./Weather";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <h1>{props.city}</h1>

      <div className="containerF">
        <div className="row">
          <div className="column">
            <h2 id="date">
              <small>Time:</small>
            </h2>
            <br />
            2:45 PM
            <br />
            <h2 id="date">
              <small>Date:</small>
            </h2>
            <br />
            01/01/2001
          </div>

          <div className="column">
            <h2>
              <strong>Today</strong>
            </h2>
            <br />
            Humidity: 80%
            <br />
            Wind Speed: 12 km/hr
            <div class="temperature">
              <a href="#" id="celsius-link" class="active">
                21°C
              </a>
              |
              <a href="#" id="fahrenheit-link">
                70°F
              </a>
            </div>
          </div>
        </div>
      </div>
      <h3>Other forecast </h3>
      <Weather city="Paris" temperature={19} />
      <Weather city="New York" temperature={22} />
      <br />
    </div>
  );
}
