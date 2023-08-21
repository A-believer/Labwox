// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer, {setCartItems} from './cartSlice';
import { getAuth } from 'firebase/auth';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Load cart items from local storage
const persistedCartItems = localStorage.getItem('cartItems');
if (persistedCartItems) {
  const auth = getAuth(); // Get the Firebase Auth instance
  const user = auth.currentUser; // Get the current user
  if (user) {
    const cartItemsWithUserId = JSON.parse(persistedCartItems).map(item => ({
      ...item,
      userId: user.uid,
    }));
    store.dispatch(setCartItems(cartItemsWithUserId));
  }
}

// Save cart items to local storage whenever the cart changes
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cartItems', JSON.stringify(state.cart.cartItems));
});

export default store;
