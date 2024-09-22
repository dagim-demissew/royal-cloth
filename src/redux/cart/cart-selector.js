import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems // returns cart items
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
      0
    ) // returns count of cart items
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (totalQuantity, cartItem) =>
      totalQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
