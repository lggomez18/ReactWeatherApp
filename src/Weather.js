import React from "react";

function Weather(props) {
  //function farenheitTemperature() {
  //let temperature = (props.temperature * 9) / 5 + 32;
  //return Math.round(temperature);

  return (
    <div>
      The temperature in {props.city} is {props.temperature}°C and {""}
      {Math.round(props.temperature * (9 / 5) + 32)}°F
    </div>
  );
}

export default Weather;
