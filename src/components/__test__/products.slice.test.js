import productsReducer, { fetchProducts } from '../../state/products.slice';
import { IDLE, LOADING, SUCCEEDED, FAILED } from '../../state/status';
import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';

jest.mock('axios');

describe('productsSlice', () => {
  const initialState = {
    products: [],
    status: IDLE,
    error: null,
  };

  it('should handle initial state', () => {
    const nextState = productsReducer(undefined, {});
    expect(nextState).toEqual(initialState);
  });

  it('should handle fetchProducts.pending', () => {
    const action = { type: fetchProducts.pending.type };
    const nextState = productsReducer(initialState, action);
    expect(nextState.status).toEqual(LOADING);
    expect(nextState.error).toBeNull();
  });

  it('should handle fetchProducts.fulfilled', () => {
    const products = [{ id: 1, title: 'Product 1' }, { id: 2, title: 'Product 2' }];
    const action = { type: fetchProducts.fulfilled.type, payload: products };
    const nextState = productsReducer(initialState, action);
    expect(nextState.status).toEqual(SUCCEEDED);
    expect(nextState.products).toEqual(products);
  });

  it('should handle fetchProducts.rejected', () => {
    const action = { type: fetchProducts.rejected.type, error: { message: 'Fetch failed' } };
    const nextState = productsReducer(initialState, action);
    expect(nextState.status).toEqual(FAILED);
    expect(nextState.error).toEqual('Fetch failed');
  });
});