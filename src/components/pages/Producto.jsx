/* // Producto.jsx
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Producto({ image, agregarAlCarrito }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Button variant="primary" onClick={agregarAlCarrito}>
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Producto;
 */
