import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <App name={<strong>John</strong>} age={25} />
);
