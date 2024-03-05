/* import React, { useContext } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useNavbarContext } from "./pages/NavbarContext";

const Navbar = () => {
  const { menuOpen, toggleMenu } = useNavbarContext();

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
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/productos">Productos</NavLink>
        </li>

        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; */
