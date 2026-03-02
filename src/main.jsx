import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./components/AuthComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
  </AuthProvider>
);
