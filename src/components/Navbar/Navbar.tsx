import React from 'react';
import CustomTooltip from '../Tooltip/Tooltip';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">BOLD</h1>
      <div className="navbar-items">
        <p>Mi negocio</p>
        <div className="navbar-help-container">
          <p>Ayuda</p>
          <CustomTooltip
            type="help"
            text="Conoce más trabajo del creador de ésta página"
            redirect={'https://github.com/martincorredor'}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
