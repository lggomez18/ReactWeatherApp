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
            Hora:
            <br />
            2:45 PM
            <br />
            <h2 id="date">
              <small>Fecha</small>
            </h2>
            <br />
            01/01/2001
          </div>

          <div className="column">
            <strong>Today</strong>
            <br />
            Humidity: 80%
            <br />
            Wind Speed: 12 km/hr
          </div>
        </div>
      </div>
    </div>
  );
}
