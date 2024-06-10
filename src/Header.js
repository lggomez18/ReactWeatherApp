//BUILDING COMPONENTS
//1. Import react. REMEMBER to type the word React with capital letter on the first one, and all lowercase on the second-react.
import React from "react";
import Search from "./Search";
import Footer from "./Footer";

//2. Export the function
export default function Header() {
  return (
    <div class="container">
      <Search defaultCity={"Guadalajara"} />
      <br />

      <br />
      <Footer />
    </div>
  );
}
