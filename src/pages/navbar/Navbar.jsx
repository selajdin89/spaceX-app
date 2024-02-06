import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/spacex-logo1.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <nav id='nav-bar'>
        <ul>
<<<<<<< HEAD
          <NavLink>Rockets</NavLink>
          <NavLink>Missions</NavLink>
          <NavLink>My Profile</NavLink>
          <NavLink to="/dragons" >Dragons</NavLink>
=======
          <NavLink to='/'>Rockets</NavLink>
          <NavLink to='/missions'>Missions</NavLink>
          <NavLink to='/my-profile'>My Profile</NavLink>
          <NavLink>Dragons</NavLink>
>>>>>>> f0fa4929e21d782118278104126d551815cd7b7c
        </ul>
        <img className='logo' src={logo} alt='App Logo' />
      </nav>
    </div>
  );
};

export default Navbar;
