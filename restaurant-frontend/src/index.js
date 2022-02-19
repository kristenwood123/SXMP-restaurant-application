import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppProvider from "./contexts/context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
