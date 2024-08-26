import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from '../Header/index'; 

const mockStore = configureStore([]);

describe('Header Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      cart: {
        cart: [
          { id: 1, title: 'Product 1', price: 10, quantity: 2 },
          { id: 2, title: 'Product 2', price: 20, quantity: 1 }
        ]
      }
    });
  });

  it('should render the Header component with correct items count', () => {
    render(
      <Provider store={store}>
        <Header toggleCart={() => {}} />
      </Provider>
    );

    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByText('Novedades y destacados')).toBeInTheDocument();
    expect(screen.getByText('Hombre')).toBeInTheDocument();
    expect(screen.getByText('Mujer')).toBeInTheDocument();
    expect(screen.getByText('Niño/a')).toBeInTheDocument();
    expect(screen.getByText('Ofertas')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument(); // Total de items en el carrito
  });

  it('should toggle the menu when HamburgerMenu is clicked', () => {
    render(
      <Provider store={store}>
        <Header toggleCart={() => {}} />
      </Provider>
    );

    const hamburgerMenu = screen.getByTestId('hamburger-menu');
    fireEvent.click(hamburgerMenu);

  });
});