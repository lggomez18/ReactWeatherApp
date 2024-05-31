import React from "react";

export default function Weather() {
  function temperature (event){
    event.preventDefault();
    alert("Coming soon");
  
  return (
  <button onClick={temperature}>Current Temperature</button>;
  )
}
