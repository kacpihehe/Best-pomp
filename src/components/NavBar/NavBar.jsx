import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo_bp.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bestpomp-navbar-container">
      <img src={logo} alt="Logo" className="bestpomp-navbar-logo" />
      <div className="bestpomp-navbar-links-containers">
        <Link to='/'>Home</Link>
        <Link to='/info'>Info</Link>
        <Link to='/uslugi'>Usługi</Link>
        <Link to='/projekty'>Projekty</Link>
        <Link to='/kontakt'>Kontakt</Link>
        <Link to='/faq'>FAQ</Link>
      </div>
    </div>
  );
};

export default NavBar;
