import styled from 'styled-components';

export const CartContainer = styled.div`
  position: fixed;
  right: ${({ isVisible }) => (isVisible ? '0' : '-100vw')};
  top: 0;
  width: 30vw;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
  display: flex;
  flex-direction: column;
  transition: right 0.5s ease-in-out;
  display: flex ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  @media (max-width: 1800px) {
    width: 37vw;
    transition: all ease 0.25s;
  }
  @media (max-width: 1480px) {
    width: 42vw;
    transition: all ease 0.25s;
  }
  @media (max-width: 1300px) {
    width: 50vw;
    transition: all ease 0.25s;
  }
  @media (max-width: 1024px) {
    width: 55vw;
    transition: all ease 0.25s;
  }
  @media (max-width: 768px) {
    width: 100%;
    transition: all ease 0.25s;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  background-color: #C70B1D;
`;

export const CartTitle = styled.h2`
  font-size: 1em;
`;

export const HideCartButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

export const CartItems = styled.ul`
  flex: 1;
  overflow-y: auto;
  padding: 55px 20px 20px 20px;
  list-style: none;
  margin: 0;
`;

export const CartItem = styled.li`
  display: flex;
  margin-bottom: 70px;
  font-size: 1.1em;
`;

export const CartItemImage = styled.img`
  width: 88px; 
  height: 88px; 
  object-fit: contain;
  margin-right: 20px;
`;

export const CartItemDetails = styled.div`
  flex: 1;
`;

export const CartItemName = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin: 0;

  & > svg {
    cursor: pointer; 
    margin: 10px;
    font-size: 1.3rem;
  }
`;

export const CartItemActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;

  & > span {
    padding: 0 10px;
    border: 1px solid #ddd;
  }
`;

export const CartItemButton = styled.button`
  background: none;
  border: 1px solid #ddd;
  padding: 5px;
  cursor: pointer;
`;

export const CartItemPrice = styled.p`
  color: #333333;
  flex: 1;
  text-align: center;
`;

export const CartItemTotal = styled.p`
  font-weight: 500;
  margin: 0 21px 0 0;
  flex: 1;
  text-align: right;
`;

export const CartFooter = styled.div`
  padding: 0 30px 90px 30px;
  border-top: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartTotal = styled.h2`
  margin: 10px 0;
`;

export const ClearCartButton = styled.button`
  background: #C70B1D;
  color: #000;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 10px;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const CheckoutButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 500;
`;