import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavbarContext } from "./NavbarContext"; // Importa el hook useNavbarContext
import { useSelector } from "react-redux";
import "../Navbar.css";

function NavbarDos() {
  const { menuOpen, toggleMenu, categoria } = useNavbarContext(); // Usa el hook useNavbarContext para acceder a los valores del contexto
  const cartItems = useSelector((state) => state.cart.cart);
  console.log("menuOpen:", menuOpen); // Agrega este log
  return (
    <nav className="navbar navbar-light bg-dark navbar">
      <a className="navbar-brand" href="#">
        <img
          className="container"
          src="https://img.freepik.com/vector-gratis/logotipo-oscuro-fotografos_1057-4419.jpg?w=740&t=st=1705286245~exp=1705286845~hmac=62b0fdc099826458a7a0cb6f9fe94516e4098bae0762e21b9ce0ddaca3be28a9"
          alt=""
          width="90"
          height="90"
        />
      </a>
      <Link to="/" className="title">
        Home
      </Link>
      <div className="menu" onClick={toggleMenu}>
        {" "}
        {/* Agrega onClick para el menú hamburguesa */}
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        {" "}
        {/* Usa el estado menuOpen para controlar las clases del menú */}
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li></li>
        {/* Otros elementos del menú */}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Link to="/carrito" className="carrito">
        <h4>
          <FontAwesomeIcon icon={faShoppingCart} />
          <small>{cartItems.length}</small>
        </h4>
      </Link>
    </nav>
  );
}

export default NavbarDos;
