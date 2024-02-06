import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/spacex-logo1.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <nav id='nav-bar'>
        <ul>
          <NavLink to='/'>Rockets</NavLink>
          <NavLink to='/missions'>Missions</NavLink>
          <NavLink to='/my-profile'>My Profile</NavLink>
          <NavLink>Dragons</NavLink>
        </ul>
        <img className='logo' src={logo} alt='App Logo' />
      </nav>
    </div>
  );
};

export default Navbar;
