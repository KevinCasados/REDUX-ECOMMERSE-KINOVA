import React, { useState } from 'react';
import ProductList from '../ProductList/index';
import Cart from '../Cart/index';
import Header from '../Header';
import { AppContainer, ProductListContainer } from './styles';
import Footer from '../Footer';
import Hero from '../Hero';

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <AppContainer>
      <Header toggleCart={toggleCart} />
      <Hero />
      <ProductListContainer>
        <ProductList />
        <Cart isVisible={isCartVisible} toggleCart={toggleCart} />
      </ProductListContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;



