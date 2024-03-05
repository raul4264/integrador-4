// En /src/components/pages/NavbarContext.jsx
import React, { createContext, useContext, useState } from "react";

export const NavbarContext = createContext();

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error("useNavbarContext must be used within a NavbarProvider");
  }

  return context;
};

export const NavbarProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoria, setCategoria] = useState(null);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const changeCategoria = (nuevaCategoria) => {
    setCategoria(nuevaCategoria);
  };

  const contextValue = { menuOpen, toggleMenu, categoria, changeCategoria };

  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  );
};
