import React, { useState } from "react";

//1. In the past we used queary selector to refer to parts of the page to communicate.
//2. React uses "use state", same function as documen.quearyselector

export default function SearchEngine() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`It is 19 Celsius in ${city}`);
  }

  //Created the function updateCity and created an event listener, to give info everytime is clicked.

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit} class="search">
      <input type="search" onChange={updateCity}></input>
      <input type="submit" value="search"></input>
    </form>
  );
}
