import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo-header.png";
import "../../styles/Header.css";

function Header() {
  return (
    <div className='header'>
      <NavLink to="/" className="active-link">
        <img className='logo-header' src={logo} alt="kasa-logo" />
      </NavLink>
      <nav className='text-header'>
        <NavLink to="/" className="active-link">Accueil</NavLink>
        <NavLink to="/About" className="active-link">A propos</NavLink>
      </nav>
    </div>
  );
}

export default Header;
