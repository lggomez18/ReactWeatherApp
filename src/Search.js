import React, { useState } from "react";
import Forecast from "./Forecast";
import City from "./city";

//1. In the past we used queary selector to refer to parts of the page to communicate.
//2. React uses "use state", same function as documen.quearyselector

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently 20°C in ${city}`);
  }

  //Created the function updateCity and created an event listener, to give info everytime is clicked.

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} class="search">
        <input type="search" onChange={updateCity}></input>
        <input type="submit" value="search"></input>
      </form>
      <Forecast city={city} />
      <h2>{message}</h2>
    </div>
  );
}
