import React from "react";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebaseUtil";
import { useNavigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { signOutStart } from "../../redux/user/user-actions";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { selectCartHidden } from "../../redux/user/user-selector";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {
  NavbarContainer,
  LogoContainer,
  OptionContainer,
  OptionDiv,
  OptionLink,
} from "./NavbarStyles";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

const Navbar = ({ currentUser, hidden, signOutStart }) => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    try {
      signOutStart()
      navigate("/auth"); // Redirect to the auth page or wherever you want
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  };
  return (
    <NavbarContainer>
      <LogoContainer to={`/`}>
        <Logo className="logo" />
      </LogoContainer>
      <OptionContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <>
            <OptionDiv onClick={handleSignOut}>SIGN OUT</OptionDiv>
            <CartIcon />
          </>
        ) : (
          <OptionLink to="/auth">SIGN IN</OptionLink>
        )}
      </OptionContainer>
      {hidden ? null : <CartDropdown />}
    </NavbarContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => {
  return{
    signOutStart : ()=>{
      dispatch(signOutStart())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
