import React from "react";
import Mapa from "./Mapa";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  const iconStyle = {
    fontSize: "1.5em", // Puedes ajustar el tamaño según tus preferencias
  };

  return (
    <div className="my-5">
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1c2331" }}
      >
        <div className="container">
          <div className="my-4">
            <Mapa />
          </div>
        </div>
        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "black" }}
        >
          <div className="container d-flex justify-content-center">
            <div className="me-4">
              <a
                href="https://wa.me/tunumero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi-whatsapp" style={iconStyle}></i>
              </a>
            </div>
            <div className="me-4">
              <a
                href="https://www.facebook.com/tufacebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi-facebook" style={iconStyle}></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/tuinstagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi-instagram" style={iconStyle}></i>
              </a>
            </div>
          </div>
        </section>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright Raul Novas by Nucba (Camada 3317) Usando :
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
