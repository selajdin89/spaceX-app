import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/spacex-logo1.png';
import './Navbar.css';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(!isMenuOpen);
      const navbar = document.querySelector(".nav-bar");
      navbar.classList.toggle('open', isMenuOpen);
    }
  }

  return (
<<<<<<< HEAD
    <div className='nav-bar'>
      <nav id='nav-bar'>
        <ul>
          <NavLink to='/'>Rockets</NavLink>
          <NavLink to='/missions'>Missions</NavLink>
          <NavLink to='/dragons'>Dragons</NavLink>
          <NavLink to='/my-profile'>My Profile</NavLink>
          
        </ul>
        <img className='logo' src={logo} alt='App Logo' />
=======
    <div className={`nav-bar ${isMenuOpen ? 'open': ''}`}>
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
        <button type="button" onClick={() => handleMenuOpen()} className="menu-btn">
          <span>Menu</span>
        </button>
>>>>>>> f948a04cea648b203832e7271037e428e66f2c66
      </nav>
    </div>
  );
};

export default Navbar;