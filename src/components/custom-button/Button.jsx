import React from "react";
import "./button.scss";

const Button = ({
  children,
  onClick,
  disabled,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""}`}
      disabled={disabled}
      onClick={onClick}
      {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
