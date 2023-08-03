import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/Home/index.jsx";
import Error404 from "./pages/404.jsx";
import Logement from "./pages/Logement.jsx";
import About from "./pages/About.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer/index.jsx";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="logement/:indexLogement" element={<Logement />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/Error" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
