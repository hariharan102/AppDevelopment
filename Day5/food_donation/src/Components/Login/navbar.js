import React from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';


function Navbar() {
  const nav = useNavigate();
 
    const handleChange = (e) => {
      nav("/");
    }
  return (
    <div>
      <nav className="navbar">
        

        <div className="logo"> <h3 onClick={handleChange}>
          MealMiracle</h3></div>
        
        <ul className="nav-links">
          <Link to="/about">

          <li>About Us</li>
          </Link>
          <Link to="">
            
          <li>Contact Us</li>
          </Link>
          
          <li>Knowledge Hub</li>
          <Link to="/login">

            
          <li>Login</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
