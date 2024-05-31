import React from "react";

export default function City(props) {
  function Fahrenheit(event) {
    event.preventDefault();
    alert(props.temperature);
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
