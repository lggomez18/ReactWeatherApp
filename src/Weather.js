import React from "react";

function Weather(props) {
  //function fahrenheitTemperature() {
  //let temperature = (props.temperature * 9) / 5 + 32;
  //return Math.round(temperature);

  function showFahrenheit(event) {}
  //as a result of using onClick, you must create en event to make the function showFahrenheit work.
  return (
    <div>
      The temperature in {props.city} is {props.temperature}°C |{" "}
      <a href="/" onClick={showFahrenheit}>
        {" "}
        {""}
        {Math.round(props.temperature * (9 / 5) + 32)}°F{" "}
      </a>
    </div>
  );
}
//onClick is used to for when the person clicks the link it automatically converts to fahrenheit.
//onClick serves as an event listener
export default Weather;
