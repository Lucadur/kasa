import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Home />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
