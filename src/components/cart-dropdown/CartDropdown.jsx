import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";
import Button from "../custom-button/Button";
import "./cartDropdowns.scss";

const CartDropdown = ({ cartItems }) => {
  console.log(cartItems)
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
