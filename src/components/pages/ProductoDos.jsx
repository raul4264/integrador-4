import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductoDos = ({ producto }) => {
  const dispatch = useDispatch();

  // Handler para agregar al carrito
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        image: producto.image,
        nombre: producto.nombre,
        precio: producto.precio,
      })
    );
  };

  return (
    <div className="container cardProducto">
      <img
        className="card-img-top"
        src={producto.image}
        alt={producto.nombre}
        style={{ width: "300px", height: "300px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text"> $ {producto.precio}</p>
        <h6 className="card-text"> {producto.tipo}</h6>
        <a href="#" onClick={handleAddToCart} className="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default ProductoDos;
