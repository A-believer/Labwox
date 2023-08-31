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

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    items: []
  },
  reducers: {
    loadOrderFromLocalStorage(state) {
      const orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];
      state.items = orderItems;
    },
    addOrder: (state, action) => {
      const newItem = action.payload
      if (newItem) {
        state.items.push(action.payload);
      localStorage.setItem('orderItems', JSON.stringify(state.items));
      }
      
    },
    removeOrder: (state, action) => {
      state.filter(order => order.id !== action.payload);
      localStorage.setItem('orderItems', JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem, loadCartFromLocalStorage } = cartSlice.actions;
export const { addOrder, removeOrder, loadOrderFromLocalStorage } = orderSlice.actions;

export const cartReducer = cartSlice.reducer;
export const orderReducer = orderSlice.reducer;
