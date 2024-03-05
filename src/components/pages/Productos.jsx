/* import React, { useState } from "react";
import productos from "../productos";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart } from "../../redux/cartSlice";
import Carrito from "./Carrito";
import Modal from "./Modal";

const Productos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalConfirmText, setModalConfirmText] = useState("");
  const [modalCancelText, setModalCancelText] = useState("");

  const categorias = [...new Set(productos.map((producto) => producto.tipo))];
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.cart.items);

  const filtrarPorCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const agregarAlCarrito = (producto) => {
    dispatch(addToCart(producto));
  };

  const handleFinalizarCompra = () => {
    setModalMessage("¿Estás seguro de finalizar la compra?");
    setModalConfirmText("Finalizar Compra");
    setModalCancelText("Cancelar");
    setIsModalOpen(true);
  };

  const handleConfirmAction = () => {
    if (modalMessage === "¿Estás seguro de finalizar la compra?") {
      dispatch(clearCart());
    }

    setIsModalOpen(false);
    setModalMessage("");
    setModalConfirmText("");
    setModalCancelText("");
  };

  const handleCancelAction = () => {
    setIsModalOpen(false);
    setModalMessage("");
    setModalConfirmText("");
    setModalCancelText("");
  };

  return (
    <div>
      <h2>Productos</h2>
      <div>
        <button onClick={() => filtrarPorCategoria("Todos")}>Todos</button>
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => filtrarPorCategoria(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      {productos
        .filter(
          (producto) =>
            categoriaSeleccionada === "Todos" ||
            producto.tipo === categoriaSeleccionada
        )
        .map((producto) => (
          <div key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>
            <img
              src={producto.image}
              alt={producto.nombre}
              style={{ width: "100px", height: "100px" }}
            />
            <button onClick={() => agregarAlCarrito(producto)}>
              Agregar al Carrito
            </button>
          </div>
        ))}

      <h2>Productos Seleccionados</h2>
      <ul>
        {carrito.map((producto) => (
          <li key={`carrito-${producto.id}`}>{producto.nombre}</li>
        ))}
      </ul>

      <button onClick={handleFinalizarCompra}>Finalizar Compra</button>

      {/* Mantén solo una instancia de Carrito aquí */}

      <Modal
        isOpen={isModalOpen}
        closeModal={handleCancelAction}
        onConfirm={handleConfirmAction}
        onCancel={handleCancelAction}
        message={modalMessage}
        confirmText={modalConfirmText}
        cancelText={modalCancelText}
      />
    </div>
  );
};

export default Productos;
 */