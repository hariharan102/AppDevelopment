import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Donarlog() {
  const [mobil, setMobil] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobil.length === 0) {
      alert("Enter the email");
      return;
    }
    if (password.length === 0) {
      alert("Enter the Password");
      return;
    }
    nav("/donorsta");
  }

  

  return (
    <div className='bobbb'>
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">DONOR LOGIN</p>
        <div className="input-container">
  <input
    type="tel" // Use "tel" type for mobile numbers
    value={mobil} // You can keep using the "email" state for simplicity
    onChange={(e) => setMobil(e.target.value)}
    placeholder="Enter mobile number" // Update the placeholder
    required
  />
</div>
        <div className="input-container">
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter password" 
            required 
          />
        </div>

        <button type="submit" className="submit" style={{textDecoration:"none"}}>
        <Link to="/donorsta" style={{textDecoration:"none"}}>
          Sign in
        </Link>
          </button>
        <p className="signup-link">
          No account?
          <Link to="/DonarRegister">

        Sign up
          </Link>
          <br>
          </br>
<Link to="/login">

          NPO Login
</Link>
       
        </p>
      </form>
    </div>
  )
}

export default Donarlog;
