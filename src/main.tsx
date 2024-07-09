import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { StateContext } from "./context/stateContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StateContext>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </StateContext>
  </React.StrictMode>
);
