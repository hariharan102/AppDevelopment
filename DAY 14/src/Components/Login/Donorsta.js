import React, { useState } from 'react';
import axios from 'axios';

function Donorsta() {
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!foodType || !quantity || !pickupTime || !address) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      await axios.post('http://localhost:8080/fooddetails/postfooddetails', {
        foodType,
        quantity,
        pickupTime,
        address,
      });

      alert('Food donation registration successful!');

    } catch (error) {
      console.error('Registration failed:', error);
      alert('Food donation registration failed. Please try again later.');
    }
  };

  return (
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Donorsta;
