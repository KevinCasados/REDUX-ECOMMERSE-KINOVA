import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../state/products.slice';
import { addToCart } from '../../state/cart.slice';
import { ProductListContainer, ProductCard, ProductImageContainer, ProductImage, ProductDetails, ProductCategory, ProductTitle, ProductPrice, AddToCartButton } from './styles';
import { FaPlus } from 'react-icons/fa';

const ProductList = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ProductListContainer>
      {products.map(product => (
        <ProductCard key={product.id}>
          <ProductImageContainer>
            <ProductImage src={product.image} alt={product.title} />
            <AddToCartButton onClick={() => dispatch(addToCart(product))}>
              <FaPlus />
            </AddToCartButton>
          </ProductImageContainer>
          <ProductDetails>
            <ProductCategory>{product.category}</ProductCategory>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>${product.price}</ProductPrice>
          </ProductDetails>
        </ProductCard>
      ))}
    </ProductListContainer>
  );
};

export default ProductList;