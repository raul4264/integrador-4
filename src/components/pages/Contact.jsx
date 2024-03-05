import React, { useState } from "react";
import Footer from "./Footer";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    asunto: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="container form-container bg-secondary mt-5">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-4">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="asunto" className="form-label">
            Asunto
          </label>
          <textarea
            className="form-control"
            id="asunto"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;

/* 

<header id="header" className="header d-flex align-items-center fixed-top">
  <div className="container-fluid d-flex align-items-center justify-content-between">

    <a href="index.html" className="logo d-flex align-items-center  me-auto me-lg-0">
     
    <img src="assets/img/logo.png" alt=""> 
      <i className="bi bi-camera"></i>
      <h1>PhotoFolio</h1>
    </a>

 
     
     
      


    <div className="header-social-links">
      <a href="#" className="twitter"><i class="bi bi-twitter"></i></a>
      <a href="#" className="facebook"><i class="bi bi-facebook"></i></a>
      <a href="#" className="instagram"><i class="bi bi-instagram"></i></a>
      <a href="#" className="linkedin"><i class="bi bi-linkedin"></i></i></a>
    </div>
    <div>
    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

  </div>

  </header>





<header className="page-header d-flex align-items-center">
  <div className="container position-relative">
    <div className="row d-flex justify-content-center">
      <div className="col-lg-6 text-center">
        <h2>Contact</h2>
        <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>

      </div>
    </div>
  </div>
</header>


<section id="contact" className="contact">
  <div className="container">

    <div className="row gy-4 justify-content-center">

      <div className="col-lg-3">
        <div className="info-item d-flex">
          <i className="bi bi-geo-alt flex-shrink-0"></i>
          <div>
            <h4>Location:</h4>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="info-item d-flex">
          <i className="bi bi-envelope flex-shrink-0"></i>
          <div>
            <h4>Email:</h4>
            <p>info@example.com</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="info-item d-flex">
          <i className="bi bi-phone flex-shrink-0"></i>
          <div>
            <h4>Call:</h4>
            <p>+1 5589 55488 55</p>
          </div>
        </div>
      </div>

    </div>



  </div>
</section>

</main>n


<div id="footer" className="footer">

</div> */
