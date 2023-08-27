// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';



const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    loadCartFromLocalStorage(state) {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      state.items = cartItems;
    },
    addItem(state, action) {
      state.items.push(action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeItem(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    
  }
});

export const { addItem, removeItem, loadCartFromLocalStorage } = cartSlice.actions;

export default cartSlice.reducer;
