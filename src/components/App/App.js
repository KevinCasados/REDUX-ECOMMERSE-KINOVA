import React, { useState } from 'react';
import ProductList from '../ProductList/index';
import Cart from '../Cart/index';
import Header from '../Header';
import Footer from '../Footer';
import { AppContainer, ProductListContainer } from './styles';
import { Provider } from 'react-redux';
import store from '../App/store';
import Hero from '../Hero/index'

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <Provider store={store}>
      <AppContainer>
        <Header toggleCart={toggleCart} />
        <Hero />
        <ProductListContainer>
          <ProductList />
          <Cart isVisible={isCartVisible} toggleCart={toggleCart} />
        </ProductListContainer>
        <Footer />
      </AppContainer>
    </Provider>
  );
}

export default App;
