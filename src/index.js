import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//1. Import componenets via folders
import Header from "./Header";
import App from "./App";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//2. Write <componenet name /> inside <StrictMode>  </StrictMode>
root.render(
  <StrictMode>
    <Header />
    <App />
    <Forecast />
    <Footer />
  </StrictMode>
);

//CONNECTING COMPONENETS
//1. Import componenets via folders
//2. Write <componenet name /> inside <StrictMode>  </StrictMode>
