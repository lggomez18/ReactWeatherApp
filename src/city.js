import React, { useState } from "react";

export default function City(props) {
  //create variables to develop functions
  const [temperature, setTemperature] = useState(props.temperature);
  const [unit, setUnit] = useState("Celsius");

  function Fahrenheit(event) {
    event.preventDefault();

    let fahrenheitTemperature = Math.round(props.temperature * (9 / 5) + 32);
    setUnit("Imperial");
    setTemperature(fahrenheitTemperature);
    //alert(`${fahrenheitTemperature}°F`);
  }

  function Celsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
    //setTemperature (props.temperature) will return Fahrenheit conversion to the original value as determined on index.js Hense, props.temeprature in parenthesis.
  }

  return (
    <div class="City">
      It is {temperature} ({unit})
      <a href="/" onClick={Celsius}>
        °C{" "}
      </a>
      |{" "}
      <a href="/" onClick={Fahrenheit}>
        °F{" "}
      </a>{" "}
      in {props.name}
    </div>
  );
}
