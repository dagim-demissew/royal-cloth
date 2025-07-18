import { cartActionTypes } from "./cart-type";
import { addItemToCart, subtractItemFromCart } from "./cartUtils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case cartActionTypes.SUBTRACT_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: subtractItemFromCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
