import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//1. Import componenets via folders
import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//2. Write <componenet name /> inside <StrictMode>  </StrictMode>
root.render(
  <StrictMode>
    <Header />
    <Weather />
  </StrictMode>,
);

//CONNECTING COMPONENETS
//1. Import componenets via folders
//2. Write <componenet name /> inside <StrictMode>  </StrictMode>
