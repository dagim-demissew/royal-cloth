import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebaseUtil";
import HiveIcon from "@mui/icons-material/Hive";

import "./navbar.scss";

const Navbar = ({ currentUser }) => {
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
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/auth">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
