import styled from 'styled-components';

export const ProductListContainer = styled.div`
  display: grid;
  gap: 1.875rem;
  grid-template-columns: repeat(1, 1fr);
  margin-left: auto;
  margin-right: auto;
  max-width: 640px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 0;
    max-width: none;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1320px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1625px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 160px;
  object-fit: contain;
  transition: transform 0.2s;
`;

export const AddToCartButton = styled.button`
  position: absolute;
  top: 10px;
  right: -50px;
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 0;
  font-size: 0.8em;
  transition: right 0.3s, opacity 0.3s;
  opacity: 0;

  &:hover {
    background-color: darkred;
  }
`;

export const ProductImageContainer = styled.div`
  position: relative;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 30px 0 30px 0;
  background-color: white;
  border-radius: 10px;

  &:hover ${ProductImage} {
    transform: scale(1.1);
  }

  &:hover ${AddToCartButton} {
    right: 10px;
    opacity: 1;
  }
`;

export const ProductCard = styled.div`
  margin: 10px;
  box-sizing: border-box;
`;

export const ProductDetails = styled.div`
  padding: 10px;
  text-align: left;
`;

export const ProductCategory = styled.p`
  color: #c4bbbb;
  font-size: 0.8em;
  margin: 5px 0;
`;

export const ProductTitle = styled.h2`
  font-size: 1em;
  margin: 10px 0;
  white-space: normal; 
  color: #d4d4d4;
`;

export const ProductPrice = styled.p`
  font-size: 1em;
  font-weight: bold;
  margin: 10px 0;
  color: #cbff0f;
`;