import React from 'react';
import "./Aboutus.css";
import Navbar from './navbar';
import Footer from './Footer';
const Aboutus = () => {
  return (
    <>
    <Navbar/>
    <div class="ab">

    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to [App Name], where we believe in making a positive impact on
        the world, one meal at a time.
      </p>

      <h2>Our Mission</h2>
      <p>
        At [App Name], we're on a mission to reduce food waste and combat hunger
        in our communities. We believe that no one should go to bed hungry, and
        no food should go to waste. Through our platform, we connect food donors
        with those in need, creating a seamless and efficient way to redistribute
        surplus food.
      </p>

      <h2>How It Works</h2>
      <p>
        Our app provides a user-friendly interface that allows individuals,
        restaurants, and businesses to easily donate excess food. Whether it's
        unsold inventory, surplus produce, or prepared meals, we ensure that every
        donation finds its way to those who need it most.
      </p>

      <h2>Join Our Community</h2>
      <p>
        Together, we can make a significant impact on the lives of those facing
        food insecurity. Join our community of passionate individuals and
        organizations dedicated to making a difference. By using [App Name], you
        become a part of a movement that strives for a world where everyone has
        access to nutritious meals.
      </p>

      <h2>Get Involved</h2>
      <p>
        There are many ways to get involved with [App Name]. You can become a food
        donor, volunteer your time, or support our cause through donations. Every
        contribution, big or small, brings us one step closer to a hunger-free
        world.
      </p>

      <h2>Contact Us</h2>
      <p>
        Have questions or want to learn more? Feel free to reach out to us at
        [Contact Email or Phone Number]. We're always here to help and appreciate
        your support!
      </p>

      <p>
        Thank you for being a part of our journey towards a brighter and more
        nourished future.
      </p>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Aboutus;
