import React from "react";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <h1>{props.city}</h1>
    </div>
  );
}
