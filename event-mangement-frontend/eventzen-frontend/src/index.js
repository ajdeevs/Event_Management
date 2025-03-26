import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles

// If you decide to remove reportWebVitals, delete the following lines.
// import reportWebVitals from "./reportWebVitals";
// reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
