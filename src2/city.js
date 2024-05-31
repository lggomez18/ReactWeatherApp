import React from "react";

export default function City(props) {
  return (
    <div class="City">
      It is {props.temperature}°C |{" "}
      <a href="/" onClick={showFarenheit}>
        °F{" "}
      </a>{" "}
      in {props.name}
    </div>
  );
}
