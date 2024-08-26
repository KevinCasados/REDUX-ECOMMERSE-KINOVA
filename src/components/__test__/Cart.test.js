import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Cart from '../Cart/index'; 

const mockStore = configureStore([]);

describe('Cart Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      cart: {
        cart: [
          { id: 1, title: 'Product 1', price: 10, quantity: 2, image: 'image1.jpg' },
          { id: 2, title: 'Product 2', price: 20, quantity: 1, image: 'image2.jpg' }
        ]
      }
    });
  });

  it('should render the cart with items', () => {
    render(
      <Provider store={store}>
        <Cart isVisible={true} toggleCart={() => {}} />
      </Provider>
    );

    expect(screen.getByText('Shopping Bag (3)')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('Total: $40.00')).toBeInTheDocument();
  });
});