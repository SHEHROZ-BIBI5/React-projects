import React from 'react';
 import logo from "../../../src/assets/colour-logo.png"
 import { Link } from 'react-router-dom';

 import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <img src={logo} alt="Logo" className='logo' />
        <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/light">Light Colour</Link></li>
         <li><Link to="/dark">Dark Colour</Link></li>
         <li><Link to="/contact">Contact Us</Link></li>
 
         </ul>
      </nav>
    </>
  );
}

export default Navbar;
