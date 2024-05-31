import React, { useState } from "react";

export default function City(props) {
  const [temperature, setTemperature] = useState(props.temperature);

  function Fahrenheit(event) {
    event.preventDefault();

    let fahrenheitTemperature = Math.round(props.temperature * (9 / 5) + 32);
    setTemperature(fahrenheitTemperature);
    //alert(`${fahrenheitTemperature}°F`);
  }

  return (
    <div class="City">
      It is {temperature}°C |{" "}
      <a href="/" onClick={Fahrenheit}>
        °F{" "}
      </a>{" "}
      in {props.name}
    </div>
  );
}
