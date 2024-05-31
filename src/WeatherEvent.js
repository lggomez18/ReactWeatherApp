import React from "react";

export default function Weather() {
  function handleClick() {
    alert("Coming soon");
  }

  return <button onClick={handleClick}>Current Temperature</button>;
}

//Add an event to the button, when clicked the function handleClick the button will display a message
//In contrast to vainilla js, in react we add an event handler to a component using camel case naming convention like this -> {event name} with the event name OnClick before the event name -->onClick{eventname}
//The name of the function is executed as the value of the event handler (in this case handleClick), without including the parentheses or the event object.
