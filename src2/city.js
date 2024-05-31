import React from "react";

export default function City(props) {
  function Fahrenheit(event) {
    event.preventDefault();

    let fahrenheitTemperature = Math.round(props.temperature * (9 / 5) + 32);
    alert(fahrenheitTemperature);
  }

  return (
    <div class="City">
      It is {props.temperature}°C |{" "}
      <a href="/" onClick={Fahrenheit}>
        °F{" "}
      </a>{" "}
      in {props.name}
    </div>
  );
}
