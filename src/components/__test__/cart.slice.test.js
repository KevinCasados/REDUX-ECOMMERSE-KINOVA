import cartReducer, { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } from '../../state/cart.slice';

describe('cart reducer', () => {
  const initialState = { cart: [] };

  it('should handle initial state', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle addToCart', () => {
    const newItem = { id: 1, title: 'Product 1', price: 100 };
    const actual = cartReducer(initialState, addToCart(newItem));
    expect(actual.cart.length).toEqual(1);
    expect(actual.cart[0]).toEqual({ ...newItem, quantity: 1 });
  });

  it('should handle addToCart with existing item', () => {
    const initialStateWithItem = {
      cart: [{ id: 1, title: 'Product 1', price: 100, quantity: 1 }],
    };
    const actual = cartReducer(initialStateWithItem, addToCart({ id: 1 }));
    expect(actual.cart.length).toEqual(1);
    expect(actual.cart[0].quantity).toEqual(2);
  });

  it('should handle removeFromCart', () => {
    const initialStateWithItem = {
      cart: [{ id: 1, title: 'Product 1', price: 100, quantity: 1 }],
    };
    const actual = cartReducer(initialStateWithItem, removeFromCart(1));
    expect(actual.cart.length).toEqual(0);
  });

  it('should handle incrementQuantity', () => {
    const initialStateWithItem = {
      cart: [{ id: 1, title: 'Product 1', price: 100, quantity: 1 }],
    };
    const actual = cartReducer(initialStateWithItem, incrementQuantity(1));
    expect(actual.cart[0].quantity).toEqual(2);
  });

  it('should handle decrementQuantity', () => {
    const initialStateWithItem = {
      cart: [{ id: 1, title: 'Product 1', price: 100, quantity: 2 }],
    };
    const actual = cartReducer(initialStateWithItem, decrementQuantity(1));
    expect(actual.cart[0].quantity).toEqual(1);
  });

  it('should handle decrementQuantity and remove item if quantity is 1', () => {
    const initialStateWithItem = {
      cart: [{ id: 1, title: 'Product 1', price: 100, quantity: 1 }],
    };
    const actual = cartReducer(initialStateWithItem, decrementQuantity(1));
    expect(actual.cart.length).toEqual(0);
  });

  it('should handle clearCart', () => {
    const initialStateWithItems = {
      cart: [
        { id: 1, title: 'Product 1', price: 100, quantity: 1 },
        { id: 2, title: 'Product 2', price: 200, quantity: 1 },
      ],
    };
    const actual = cartReducer(initialStateWithItems, clearCart());
    expect(actual.cart.length).toEqual(0);
  });
});