import React from "react";

export default function Weather(props) {
  function farenheitTemperature() {
    let farenheitTemperature = (props.temperature * 9) / 5 + 32;
    return Math.round(temperature);
  }

  return (
    <div>
      The temperature in {props.city} is {props.temperature}°C and {""}{" "}
      {farenheitTemperature()}°F
    </div>
  );
}
