import { cartActionTypes } from "./cart-type";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART,
});

export const subtractItem = (item) => ({
  type: cartActionTypes.SUBTRACT_ITEM_QUANTITY,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});
