import React from "react";
import { CustomButtonContainer } from "./ButtonStyle";

const Button = ({
  children,
  onClick,
  disabled,
  inverted,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <CustomButtonContainer
      inverted={inverted}
      isGoogleSignIn={isGoogleSignIn}
      disabled={disabled}
      onClick={onClick}
      {...otherProps}>
      {children}
    </CustomButtonContainer>
  );
};

export default Button;
