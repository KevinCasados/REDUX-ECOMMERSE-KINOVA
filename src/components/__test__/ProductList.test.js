import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import ProductList from '../ProductList';
import productsReducer, { fetchProducts } from '../../state/products.slice';
import cartReducer, { addToCart } from '../../state/cart.slice';
import '@testing-library/jest-dom/extend-expect';

// Mocks
jest.mock('../../state/products.slice', () => ({
  fetchProducts: jest.fn(() => async () => []),
  addToCart: jest.fn(),
  __esModule: true,
}));

// Crear el store con los reducers y el middleware
const createTestStore = () => {
    return configureStore({
      reducer: {
        products: productsReducer,
        cart: cartReducer,
      },
    });
  };

describe('ProductList Component', () => {
  let store;

  beforeEach(() => {
    store = createTestStore({
      products: {
        products: [
          { id: 1, title: 'Product 1', price: 10, category: 'Category 1', image: 'image1.jpg' },
          { id: 2, title: 'Product 2', price: 20, category: 'Category 2', image: 'image2.jpg' }
        ],
        status: 'succeeded', // Estado de carga simulada
      },
      cart: { cart: [] }
    });
  });

  it('should render the product list with products', () => {
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('should dispatch fetchProducts when the component is mounted', () => {
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    expect(fetchProducts).toHaveBeenCalledTimes(1);
  });

  it('should dispatch addToCart when "Add to Cart" button is clicked', () => {
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    const addToCartButtons = screen.getAllByRole('button');
    fireEvent.click(addToCartButtons[0]);

    expect(addToCart).toHaveBeenCalledTimes(1);
  });
});