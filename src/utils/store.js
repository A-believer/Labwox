// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import {cartReducer, orderReducer} from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
  },
});



export default store;
