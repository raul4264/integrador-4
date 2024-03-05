import imagen from "../../assets/profile-img.jpg";
import Footer from "./Footer";
import "./About.css";

function About() {
  return (
    <>
      <div className=" bg-secondary text-white container ">
        <div className=" container d-flex align-items-center">
          <div className="container ">
            <div className="row d-flex justify-content-center container">
              <div className="col-lg-6 text-center mt-1 about-container">
                <h2 className="container">
                  Detrás de la Lente... Historia y Pasión
                </h2>
                <p className="mt-5 container">
                  ¡Bienvenidos a la fascinante historia visual de Emily Turner!
                  Como fotógrafa apasionada con un ojo artístico único, Emily se
                  sumerge en la captura de momentos que cuentan historias
                  memorables. Su enfoque va más allá de la simple toma de
                  imágenes; se esfuerza por revelar la autenticidad y la
                  conexión emocional en cada fotografía. Acompáñanos en un viaje
                  a través de su lente, donde la creatividad se fusiona con la
                  realidad, y cada instantánea se convierte en una obra maestra
                  en sí misma.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section id="about" className="about">
          <div className="container">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4 mt-5">
                <img
                  src={imagen}
                  className="img-fluid"
                  alt="Fotografía de la artista"
                />
              </div>
              <div className="col-lg-5 content mt-5">
                <h2>Sobre la Fotógrafa</h2>
                <p className="fst-italic py-3">
                  ¡Hola! Soy "Emily Turner, una apasionada fotógrafa con base en
                  New York. Mi objetivo es capturar momentos hermosos y contar
                  historias a través de mi lente.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Fecha de Nacimiento:</strong>{" "}
                        <span>DD de Mes de Año</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Sitio Web:</strong> <span>www.ejemplo.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Teléfono:</strong> <span>+123 456 7890</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Ciudad:</strong> <span>New York, USA.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>42:</strong> <span>Edad</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Grado Académico:</strong> <span>Maestría</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Correo Electrónico:</strong>{" "}
                        <span>correo@ejemplo.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Trabajo Freelance:</strong>{" "}
                        <span>Disponible</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="py-3">
                  A lo largo de mi carrera, he tenido el privilegio de capturar
                  momentos especiales para mis clientes. Mi enfoque se centra en
                  la creatividad, la autenticidad y la conexión emocional en
                  cada fotografía.
                </p>
                <p className="m-0">
                  Además de ofrecer servicios de fotografía, también comparto mi
                  experiencia a través de talleres y seminarios. Creo que la
                  fotografía es una forma poderosa de expresión artística y me
                  encanta inspirar a otros a explorar su creatividad.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default About;
