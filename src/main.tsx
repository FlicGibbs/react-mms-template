/*import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);*/

import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
