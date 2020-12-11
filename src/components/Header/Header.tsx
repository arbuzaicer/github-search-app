import React from "react";
// @ts-ignore
import Logo from "../../assets/logo.png";

import "./Header.scss";

const Header = () => (
  <nav className="navigation">
    <div className="logo-section">
      <img src={Logo} alt="Logo" />
      <div className="logo-content">
        <h3>Requestum</h3>
        <h5>web development company</h5>
      </div>
    </div>
    <div className="header-description">
      <h4>Github users search app</h4>
    </div>
  </nav>
);

export default Header;
