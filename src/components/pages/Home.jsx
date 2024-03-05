import image from "../../assets/hero-bg.jpg";
import logo from "../../assets/logoCentral.jpg";
function Home() {
  return (
    <>
      <div
        className="p-5 text-center bg-image rounded-3 container-fluid"
        style={{
          backgroundImage: `url(${image})`,
          height: "90vh",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          boxSizing: "content-box",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white container">
              <h1 className="mb-3">Estudio Fotografico</h1>
              <h4 className="mb-3">Venta de fotos artisticas</h4>
              <img
                className="container img-fluid"
                src={logo}
                alt="Logo"
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "200px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
