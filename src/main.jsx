import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProviderData } from "./context/AppProvider.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProviderData>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProviderData>
);
