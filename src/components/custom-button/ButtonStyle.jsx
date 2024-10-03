import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border: 1.2px solid rgb(0, 0, 0);

  &:hover {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    border: 1px solid rgb(0, 0, 0);
  }
`;

const googleButtonStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    border: none;
    background-color: #357ae8;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleButtonStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
    &:hover {
      color: white;
      background-color: black;
      opacity: 0.2;
      border: none;
    }
  }
`;
