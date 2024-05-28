import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <h1>
        Guadalajara,<small>MX</small>
      </h1>

      <div className="container">
        <div className="row">
          <div className="col">
            Hora:
            <br />
            2:45 PM
            <br />
            Fecha:
            <br />
            01/01/2001
          </div>

          <div className="col">
            <h1>Today</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
