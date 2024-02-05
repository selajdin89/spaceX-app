import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <nav id='nav-bar'>
        <ul>
          <NavLink to="/">Rockets</NavLink>
          <NavLink to="/missions">Missions</NavLink>
          <NavLink>My Profile</NavLink>
          <NavLink>Dragons</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
