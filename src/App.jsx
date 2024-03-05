// App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarritoDos from "./components/pages/CarritoDos";
import ProductosDos from "./components/pages/ProductosDos";
import NavbarDos from "./components/pages/NavbarDos";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import { NavbarProvider } from "./components/pages/NavbarContext";
import Home from "./components/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <NavbarProvider>
        {" "}
        {/* Envuelve toda tu aplicación con el NavbarProvider */}
        <NavbarDos />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductosDos />} />
          <Route path="/carrito" element={<CarritoDos />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </NavbarProvider>
    </Router>
  );
}

export default App;
