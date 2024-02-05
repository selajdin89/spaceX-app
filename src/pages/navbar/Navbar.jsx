import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <nav>
        <ul>
          <NavLink>Rockets</NavLink>
          <NavLink>Missions</NavLink>
          <NavLink>My Profile</NavLink>
          <NavLink to="/dragons" >Dragons</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
