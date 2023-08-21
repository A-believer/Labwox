// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
     addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

     setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { addItem, removeItem, setCartItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
