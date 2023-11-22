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
    addItem (state, action) {
      state.items.push(action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeItem (state, action) {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    clearCart (state) {
      state.items = []
      localStorage.clear()
      
    }
  }
});


const orderSlice = createSlice({
  name: "order",
  initialState: {
    items: []
  }, 
  reducers: {
    loadOrderFromLocalStorage(state) {
      const cartItems = JSON.parse(localStorage.getItem('orderItems')) || [];
      state.items = cartItems;
    },
    addItemToOrder (state, action) {
      state.items.push(action.payload);
      localStorage.setItem('orderItems', JSON.stringify(state.items));
    },
    removeItemFromOrder (state, action) {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    
  }
})



export const { addItem, removeItem, clearCart, loadCartFromLocalStorage } = cartSlice.actions;

export const { addItemToOrder, removeItemFromOrder, loadOrderFromLocalStorage } = orderSlice.actions

export const cartReducer = cartSlice.reducer;
export const orderReducer = orderSlice.reducer
