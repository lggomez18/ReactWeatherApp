import React, { useState } from "react";

//1. In the past we used queary selector to refer to parts of the page to communicate.
//2. React uses "use state", same function as documen.quearyselector

export default function SearchEngine() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Submitting");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search"></input>
      <input type="submit" value="search"></input>
    </form>
  );
}
