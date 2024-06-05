import React, { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    alert("Searching...");
  }

  function updateQuery(event) {}

  return (
    <form onSubmit={handleSearch}>
      <strong>The query is:{query} </strong>
      <br />
      <input type="search" onChange={updateQuery} />
      <input type="button" value="search" />
    </form>
  );
}
