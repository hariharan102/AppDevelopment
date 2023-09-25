import React, { useState } from 'react';
import "./Donorsta.css"; 
import Footer from './Footer';
import "./Fs";
import Fs from './Fs';

function Donorsta() {
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!foodType || !quantity || !pickupTime || !address) {
      alert('Please fill out all fields.');
      return;
    }

   

  }

  return (
    <>
    <Fs/>
    <div className="donorsta-container">
      <div className="register-container">
        <h1>REGISTER FOR FOOD DONATION</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Type of Food
            <input 
              type="text" 
              value={foodType} 
              onChange={(e) => setFoodType(e.target.value)} 
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="foodType" 
              required 
              />
          </label>
          <label>
            Quantity (in kg)
            <input 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(e.target.value)} 
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="quantity" 
              required 
            />
          </label>
          <label>
            Preferred Pickup Time
            <input 
              type="time" 
              value={pickupTime} 
              onChange={(e) => setPickupTime(e.target.value)} 
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="pickupTime" 
              required 
              />
          </label>
          <label>
            Address
            <input 
              type="text" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              onBlur={(e) => e.target.value.trim() === '' && e.target.classList.add('invalid')}
              name="address" 
              required 
              />
          </label>
          <button type="submit" >Submit</button>
        </form>
      </div>
    </div>
    <Footer/>
              </>
  )
}

export default Donorsta;
