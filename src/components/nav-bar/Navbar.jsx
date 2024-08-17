import React from "react";
import { Link } from "react-router-dom";
import HiveIcon from "@mui/icons-material/Hive";

import "./navbar.scss";

const Navbar = () => {
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
      </div>
    </div>
  );
};

export default Navbar;
