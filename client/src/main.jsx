import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LoggedInUserContextProvider } from "./Contexts/LoggedInUserContxt.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoggedInUserContextProvider>
      <App />
    </LoggedInUserContextProvider>
  </React.StrictMode>
);
