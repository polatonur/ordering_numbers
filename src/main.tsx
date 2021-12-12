import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LevelProvider } from "./context/LevelContext";

ReactDOM.render(
  <React.StrictMode>
    <LevelProvider>
      <App />
    </LevelProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
