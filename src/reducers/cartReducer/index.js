import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, CLEAR_CART  } from '../../actions/productActions/index';

const initialState = {
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const existingProduct = state.cart.find(item => item.id === action.payload.id);
        if (existingProduct) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          };
        }
      case REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
        };
      case INCREMENT_QUANTITY:
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      case DECREMENT_QUANTITY:
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      case CLEAR_CART:
        return {
          ...state,
          cart: [],
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;