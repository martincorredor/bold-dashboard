import React from 'react';
import CustomTooltip from '../Tooltip/Tooltip';
import './styles.css';
import Link from '@mui/material/Link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        <svg
          width="79"
          height="28"
          viewBox="0 0 79 28"
          fill="none"
          className="icon-gradient"
        >
          <path
            d="M23.764 18.993h19.502c-.469 5.045-4.662 9.006-9.752 9.006-5.09 0-9.282-3.96-9.75-9.006zM9.85 8.154v19.8c4.967-.476 8.87-4.734 8.87-9.9S14.816 8.63 9.85 8.155zm23.665-.044c-5.089 0-9.282 3.962-9.751 9.007h19.502c-.469-5.045-4.662-9.008-9.752-9.008h.001zM0 15.335V28h7.944V0H0v15.336zM70.804 0v28h7.944V0h-7.944zM60.085 18.055c0 .628.06 1.242.171 1.839.797 4.305 4.336 7.642 8.7 8.06v-19.8c-4.968.476-8.87 4.734-8.87 9.9zm-12.802 9.944h7.944V0h-7.944v28z"
            fill="url(#bold-icon-new_inline_svg__paint0_linear_5405_108701)"
          ></path>
          <defs>
            <linearGradient
              id="bold-icon-new_inline_svg__paint0_linear_5405_108701"
              x1="78.748"
              y1="14"
              x2="0"
              y2="14"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.2" stopColor="#fff"></stop>
              <stop offset="0.8" stopColor="#fff"></stop>
            </linearGradient>
          </defs>
        </svg>
      </h1>
      <div className="navbar-items">
        <p>Mi negocio</p>
        <div className="navbar-help-container">
          <Link
            href="https://github.com/martincorredor"
            underline="none"
            color="#fff"
            target="_blank"
          >
            Ayuda
          </Link>
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
