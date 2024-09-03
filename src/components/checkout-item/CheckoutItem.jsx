import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../../redux/cart/cart-action";
import { addItem } from "../../redux/cart/cart-action";
import { subtractItem } from "../../redux/cart/cart-action";
import { Clear } from "@mui/icons-material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./checkoutItem.scss";

const CheckoutItem = ({ cartItem, removeItem, addItem, subtractItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <KeyboardArrowLeftIcon
          className="action-arrow"
          onClick={() => {
            subtractItem(cartItem);
          }}
        />
        {quantity}
        <KeyboardArrowRightIcon
          className="action-arrow"
          onClick={() => {
            addItem(cartItem);
          }}
        />
      </span>
      <span className="price">{price}</span>
      <div className="remove-button">
        <Clear
          onClick={() => {
            removeItem(cartItem);
          }}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (cartItem) => dispatch(removeItem(cartItem)),
  addItem: (cartItem) => dispatch(addItem(cartItem)),
  subtractItem: (cartItem) => dispatch(subtractItem(cartItem)),
});


export default connect(null, mapDispatchToProps)(CheckoutItem);
