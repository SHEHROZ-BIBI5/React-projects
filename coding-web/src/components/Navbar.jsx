import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
