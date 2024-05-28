import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <h1>
        Guadalajara,<small>MX</small>
      </h1>

      <div className="containerF">
        <div className="row">
          <div className="column">
            <h2 id="date">
              <small>Hora:</small>
            </h2>
            <br />
            2:45 PM
            <br />
            <h2 id="date">
              <small>Fecha:</small>
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
    </div>
  );
}
