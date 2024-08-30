import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebaseUtil";
import { useNavigate } from "react-router-dom";
import HiveIcon from "@mui/icons-material/Hive";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import "./navbar.scss";

const Navbar = ({ currentUser, hidden }) => {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate("/auth"); // Redirect to the auth page or wherever you want
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  };
  return (
    <div className="navbar">
      <Link className="logo-container" to={`/`}>
        <HiveIcon className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <>
            <div className="option" onClick={handleSignOut}>
              SIGN OUT
            </div>
            <CartIcon />
          </>
        ) : (
          <Link className="option" to="/auth">
            SIGN IN
          </Link>
        )}
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user, cart }) => ({
  currentUser: user.currentUser,
  hidden: cart.hidden,
});

export default connect(mapStateToProps)(Navbar);
