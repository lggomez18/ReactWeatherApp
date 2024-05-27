//BUILDING EACH COMPONENT//
//1. Import react
import React from "react";

//2.Export the function
export default function Footer() {
  return (
    //3. Copy & paste, from your index.html, the footer here.
    <footer>
      <a
        id="github"
        href="https://github.com/lggomez18/WeatherApp"
        target="_blank"
      >
        Open-Source code
      </a>
      by Leticia Gmz🇲🇽
    </footer>
  );
}

//4. Return to INDEX.JS and import this component FOOTER.JS by redirecting it to the file.See below.
//import Footer from "./Footer";
