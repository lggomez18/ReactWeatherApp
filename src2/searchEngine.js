import React from "react";

export default function Search() {
  return (
    <form>
      <input type="search" id="search" name="search" aria-label="Search" />
      <input type="button" value="search" />
    </form>
  );
}
