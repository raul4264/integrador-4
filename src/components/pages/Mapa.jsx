// Mapa.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Mapa.css";

const Mapa = () => {
  const center = [51.505, -0.09];

  return (
    <div className="mapa-container mt-3">
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "300px", width: "100%" }}
        className="mapa" // Agregamos la clase "mapa" al contenedor del mapa
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mapa;
