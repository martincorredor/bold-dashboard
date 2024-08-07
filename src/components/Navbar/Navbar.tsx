import React from 'react';
import Tooltip from '../Tooltip/Tooltip';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">BOLD</h1>
      <div className="navbar-items">
        <p>Mi negocio</p>
        <div className="navbar-help-container">
          <p>Ayuda</p>
          <Tooltip type="help" text="Este es un tooltip de ayuda" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
