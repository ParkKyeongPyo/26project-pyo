import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./CSS/font.css";

import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{ height: "inherit", minWidth: "1280px" }}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </div>
);
