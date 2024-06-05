import React from "react";

export default function Search() {
  function handleSearch(event) {
    event.preventDefault();
    alert("Searching...");
  }

  return (
    <form onSubmit={handleSearch}>
      <input type="search" id="search" name="search" aria-label="Search" />
      <input type="button" value="search" />
    </form>
  );
}
