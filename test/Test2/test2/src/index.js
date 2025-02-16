import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./User";
import Register from "./Reg"; // Import the Register component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user" element={<User />} />
      <Route path="/reg" element={<Register />} />{" "}
      {/* Add the Register route */}
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
