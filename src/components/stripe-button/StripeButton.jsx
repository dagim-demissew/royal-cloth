import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Q2aIVCXjMpOZlFdjLb3mYA2buYFcz377yGiB8eS1W9i7kQr9WlfCD8r5fk0e7NIEnjHvgtWliaPDPVEvXI9Thn500TzMmwBj0";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="ROYAL Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/1Ak2.svg"
      description={`Your Total Is $${price} `}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
