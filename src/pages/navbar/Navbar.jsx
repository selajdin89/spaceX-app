import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(!isMenuOpen);
      const navbar = document.querySelector('.nav-bar');
      navbar.classList.toggle('open', isMenuOpen);
    }
  };

  return (
    <div className={`nav-bar ${isMenuOpen ? 'open' : ''}`}>
      <nav id='nav-bar'>
        <ul>
          <li onClick={() => handleMenuOpen()}>
            <NavLink to='/'>Rockets</NavLink>
          </li>
          <li onClick={() => handleMenuOpen()}>
            <NavLink to='/missions'>Missions</NavLink>
          </li>
          <li onClick={() => handleMenuOpen()}>
            <NavLink to='/my-profile'>My Profile</NavLink>
          </li>
          <li onClick={() => handleMenuOpen()}>
            <NavLink>Dragons</NavLink>
          </li>
        </ul>
        <button
          type='button'
          onClick={() => handleMenuOpen()}
          className='menu-btn'
        >
          <span>Menu</span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
