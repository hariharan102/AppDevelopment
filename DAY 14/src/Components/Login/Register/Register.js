import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

function Register() {
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [MobileNo, setMobileNo] = useState('');
  const [Address, setAddress] = useState('');
  const [Password, setPassword] = useState('');
  const [ConformPassword, setConformPassword] = useState('');
  const nav1 = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!Firstname || !Lastname || !MobileNo || !Address || !Password || !ConformPassword) {
      alert('Please fill out all fields.');
      return;
    }
  
    if (Password !== ConformPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8080/api/registration/register', {
        firstName: Firstname,
        lastName: Lastname,
        mobileNo: MobileNo,
        address: Address,
        password: Password,
      });
  
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
    nav1("/dololog")
  };
  
  return (

    <div className="bobb">
      <div className="register-container">
        <h1>REGISTER AS A NPO</h1>
        <form onSubmit={handleSubmit}>
          <label>
            First Name
            <input
              type="text"
              value={Firstname}
              onChange={(e) => setFirstname(e.target.value)}
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="Firstname"
              required
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              value={Lastname}
              onChange={(e) => setLastname(e.target.value)}
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="Lastname"
              required
            />
          </label>
          <label>
            Mobile No
            <input
              type="text"
              value={MobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="MobileNo"
              required
            />
          </label>
          <label>
            Address
            <input
              type="text"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="Address"
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="Password"
              required
            />
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              value={ConformPassword}
              onChange={(e) => setConformPassword(e.target.value)}
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="ConformPassword"
              required
            />
          </label>

          <button type="submit">Submit</button>
          <Link to="/DonarRegister" style={{ textDecoration: "none" }}>
            <span>
              &nbsp; &nbsp; Register as a Donar!
            </span>
            <Link to="/login">
              <span>
                Login?
              </span>
            </Link>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Register;
