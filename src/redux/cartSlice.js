// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { image, nombre, precio } = action.payload;

      // Buscar si el producto ya está en el carrito
      const existingProductIndex = state.cart.findIndex(
        (producto) => producto.nombre === nombre
      );

      // Si ya está en el carrito, incrementar la cantidad
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].cantidad += 1;
      } else {
        // Si no está en el carrito, agregarlo con cantidad 1
        state.cart.push({
          image,
          nombre,
          precio,
          cantidad: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const indexToRemove = state.cart.findIndex(item => item.id === id);
      if (indexToRemove !== -1) {
        state.cart.splice(indexToRemove, 1);
      }
    },
    
 
    
    
    
    clearCart: (state) => {
      state.cart = [];
    }, 
    finishPurchase: (state, action) => {
      state.cart = [];
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalType = null;
      state.product = null;
    },
  },
});

export const { addToCart, removeFromCart, clearCart,finishPurchase, closeModal } = cartSlice.actions;
export default cartSlice.reducer;

