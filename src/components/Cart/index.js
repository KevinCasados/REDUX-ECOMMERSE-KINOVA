import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity, clearCart } from '../../actions/productActions';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import {
  CartContainer,
  CartHeader,
  CartTitle,
  HideCartButton,
  CartItems,
  CartItem,
  CartItemImage,
  CartItemDetails,
  CartItemName,
  CartItemActions,
  CartItemButton,
  CartItemPrice,
  CartItemTotal,
  CartFooter,
  CartTotal,
  ClearCartButton,
  CheckoutButton
} from './styles';

const Cart = ({ isVisible, toggleCart }) => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContainer isVisible={isVisible}>
      <CartHeader>
        <CartTitle>Shopping Bag ({getTotalItems()})</CartTitle>
        <HideCartButton onClick={toggleCart}>
          <FaArrowRight />
        </HideCartButton>
      </CartHeader>
      <CartItems>
        {cart.map(item => (
          <CartItem key={item.id}>
            <CartItemImage src={item.image} alt={item.title} />
            <CartItemDetails>
              <CartItemName>
                {item.title}
                <FaTimes onClick={() => dispatch(removeFromCart(item.id))} />
              </CartItemName>
              <CartItemActions>
                <CartItemButton onClick={() => dispatch(decrementQuantity(item.id))}>-</CartItemButton>
                <span>{item.quantity}</span>
                <CartItemButton onClick={() => dispatch(incrementQuantity(item.id))}>+</CartItemButton>
                <CartItemPrice>${item.price.toFixed(2)}</CartItemPrice>
                <CartItemTotal>${(item.price * item.quantity).toFixed(2)}</CartItemTotal>
              </CartItemActions>
            </CartItemDetails>
          </CartItem>
        ))}
      </CartItems>
      <CartFooter>
        <CartTotal>Total: ${getTotalPrice()}</CartTotal>
        <ClearCartButton onClick={() => dispatch(clearCart())}>Clear Cart</ClearCartButton>
        <CheckoutButton>Checkout</CheckoutButton>
      </CartFooter>
    </CartContainer>
  );
};

export default Cart;