import { cartActionTypes } from "./cart-type";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});
