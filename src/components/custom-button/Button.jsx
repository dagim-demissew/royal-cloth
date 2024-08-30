import React from "react";
import "./button.scss";

const Button = ({
  children,
  onClick,
  disabled,
  inverted,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={`custom-button ${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      }`}
      disabled={disabled}
      onClick={onClick}
      {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
