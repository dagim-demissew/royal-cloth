import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  color: #777;
  &:hover {
    color: black;
  }
`;

export const NavbarContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  text-decoration: none;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 90px;
  padding: 25px;
  display: flex;
`;

export const OptionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled(Link)`
  ${OptionContainerStyles}
`;
