import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FAILED, IDLE, LOADING, SUCCEEDED } from './status';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: IDLE,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;