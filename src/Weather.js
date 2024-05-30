import React from "react";

export default function Weather(props) {
  return (
    <div>
      The temperature in {props.city} is {props.temperature}°C and ..°F
    </div>
  );
}
