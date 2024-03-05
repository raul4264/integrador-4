import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  finishPurchase,
} from "../../redux/cartSlice";
import ModalWrapper from "./ModalWrapper";
const CarritoDos = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const calcularPrecioTotal = () => {
    console.log("Productos en el carrito:", cartItems);
    return cartItems.reduce((total, producto) => {
      const precio = producto.precio || 0;
      const cantidad = producto.cantidad || 0;
      const subtotal = precio * cantidad;
      console.log(
        `Producto: ${producto.nombre}, Precio: ${precio}, Cantidad: ${cantidad}, Subtotal: ${subtotal}`
      );
      return total + subtotal;
    }, 0);
  };

  // En CarritoDos.js
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleFinishPurchase = () => {
    // Puedes realizar acciones adicionales antes de finalizar la compra, si es necesario

    // Llama a la acción finishPurchase para vaciar el carrito
    dispatch(finishPurchase());
  };

  return (
    <div
      className="text-primary container"
      style={{ width: "500px", margin: "auto" }}
    >
      <h1>Carrito de Compras</h1>

      {cartItems.map((producto, index) => (
        <div className="container" key={index}>
          <div
            style={{
              padding: "10px",
              display: "flex",
              alignItems: "center",
              gap: "3px",
              justifyContent: "center",
              textAlign: "center",
              margin: "0 auto",
              flexDirection: "column",
            }}
          >
            <img
              src={producto.image}
              alt={producto.nombre}
              style={{ width: "300px", height: "300px", margin: "auto" }}
            />
            <div>
              <p>Nombre: {producto.nombre}</p>
              <p>Precio: ${producto.precio}</p>
              <p>Cantidad: {producto.cantidad}</p>
              <button
                onClick={() => handleRemoveFromCart(producto.id)}
                className="btn btn-primary"
              >
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      ))}

      <div
        style={{
          backgroundColor: "antiquewhite",
          color: "black",
          fontSize: "large",
        }}
      >
        <p>
          Total de productos en el carrito:{" "}
          <span
            style={{ fontSize: "20px", fontWeight: "bold", color: "green" }}
          >
            {cartItems.length}
          </span>
        </p>
        <p style={{ fontSize: "20px", fontWeight: "bold", color: "green" }}>
          Precio Total: ${calcularPrecioTotal()}
        </p>
        <button onClick={handleClearCart} className="btn btn-danger">
          Eliminar todo
        </button>
        <button onClick={handleFinishPurchase} className="btn btn-success">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default CarritoDos;
