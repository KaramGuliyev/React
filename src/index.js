import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

function Adrian(name) {
  return <strong>{name}</strong>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App name={Adrian("Adrian")} age="" />);
