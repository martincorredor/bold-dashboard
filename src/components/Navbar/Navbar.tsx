import React from 'react';
import Tooltip from '../Tooltip/Tooltip';
import './styles.css'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>BOLD</div>
      <div className='navbar-items'>
        <p>Mi negocio</p>
        <div className='navbar-help-container'>
          <p>Ayuda</p>
          <Tooltip />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
