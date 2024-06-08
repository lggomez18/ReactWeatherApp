import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//1. Import componenets via folders
import "./styles.css";
import Header from "./Header";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//2. Write <componenet name /> inside <StrictMode>  </StrictMode>
root.render(
  <StrictMode>
    <Header />
  </StrictMode>,
);

//CONNECTING COMPONENETS
//1. Import componenets via folders
//2. Write <componenet name /> inside <StrictMode>  </StrictMode>
//3. In this case it is not necessary to import components forecast and footer, because those are inside the component file called header.
