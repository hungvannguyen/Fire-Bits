import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Header from "./partials/Header.jsx";
import Footer from "./partials/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Header /> */}
      <App />
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>,
);
