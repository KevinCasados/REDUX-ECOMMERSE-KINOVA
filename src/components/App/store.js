import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../../state/products.slice';
import cartReducer from '../../state/cart.slice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;