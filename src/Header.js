//BUILDING COMPONENTS
//1. Import react. REMEMBER to type the word React with capital letter on the first one, and all lowercase on the second-react.
import React from "react";
import Search from "./Search";
import Forecast from "./Forecast";
import Weather from "./Weather";
import City from "./city";
import Footer from "./Footer";

//2. Export the function
export default function Header() {
  return (
    <div class="container">
      <Search />
      <br />

      <Weather city="Paris" temperature={19} />
      <Weather city="New York" temperature={22} />
      <br />
      <City />
      <Forecast />
      <Footer />
    </div>
  );
}
