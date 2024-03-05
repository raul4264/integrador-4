import React, { useState } from "react";
import ProductoDos from "./ProductoDos";
import productos from "../../components/productos";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductosDos = () => {
  const [filtroTipo, setFiltroTipo] = useState(""); // Estado para almacenar el tipo de filtro

  // Función para manejar el cambio de tipo de filtro
  const handleFiltroChange = (tipo) => {
    setFiltroTipo(tipo);
  };

  // Filtrar productos según el tipo seleccionado
  const productosFiltrados = productos.filter(
    (producto) => !filtroTipo || producto.tipo === filtroTipo
  );

  return (
    <div className="productos container cardProducto">
      {/* Controles para seleccionar el tipo de filtro */}
      <div>
        <button onClick={() => handleFiltroChange("tipo:filtro-1")}>
          Filtro 1
        </button>
        <button onClick={() => handleFiltroChange("tipo:filtro-2")}>
          Filtro 2
        </button>
        <button onClick={() => handleFiltroChange("tipo:filtro-3")}>
          Filtro 3
        </button>
        <button onClick={() => handleFiltroChange("")}>Limpiar Filtro</button>
      </div>

      {/* Mostrar productos filtrados */}
      {productosFiltrados.map((producto) => (
        <div className="card cardProducto" key={producto.id}>
          <ProductoDos producto={producto} />
        </div>
      ))}
    </div>
  );
};

export default ProductosDos;
