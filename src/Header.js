//BUILDING COMPONENTS
//1. Import react. REMEMBER to type the word React with capital letter on the first one, and all lowercase on the second-react.
import React from "react";
import Footer from "./Footer";
import Forecast from "./Forecast";
import Weather from "./Weather";

//2. Export the function
export default function Header() {
  return (
    <div class="container">
      <div class="search">
        <form id="searchForm">
          <input
            type="search"
            placeholder="Search city"
            class="form-control"
            autocomplete="off"
            autofocus="on"
            id="city-input"
          />

          <input type="submit" value="search" id="input" />
        </form>
      </div>
      <br />
      <Weather city="Paris" temperature={19} />
      <Weather city="New York" temperature={22} />
      <br />

      <Forecast />
      <Footer />
    </div>
  );
}
