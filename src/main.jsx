import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter basename="/my-portfolio">

      <App />
    </HashRouter>
  </StrictMode>
);
