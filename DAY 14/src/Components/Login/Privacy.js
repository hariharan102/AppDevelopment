import React from 'react';
import "./Privacy.css";
import Navbar from './navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Privacy = () => {
  return (
    <>
    <Navbar/>
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>

      <p>
        At MealMiracle, we take your privacy seriously. This Privacy Policy
        outlines the types of personal information we collect, how it is used,
        and your rights regarding this information.
      </p>

      <h2>Information We Collect</h2>
      <p>
        MealMiracle may collect personal information from users in various ways,
        including but not limited to when users visit our website, register on
        the site, or fill out a form.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        We may use the information we collect for various purposes, including
        but not limited to:
      </p>

      <ul>
        <li>Providing and personalizing our services</li>
        <li>Improving customer service</li>
        <li>Processing transactions</li>
        <li>Sending periodic emails</li>
      </ul>

      <h2>Information Sharing</h2>
      <p>
        We do not sell, trade, or otherwise transfer your personal information
        to outside parties. This does not include trusted third parties who
        assist us in operating our website or servicing you, so long as those
        parties agree to keep this information confidential.
      </p>

      <h2>Security</h2>
      <p>
        We implement a variety of security measures to maintain the safety of
        your personal information.
      </p>

      <h2>Your Consent</h2>
      <p>
        By using our site, you consent to our privacy policy.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions regarding this privacy policy, you may contact
        us using the information below:
        <Link to="/contact">

        Contact us-->
        </Link>
      </p>

      <p>
      
      </p>

      <p>
        Thank you for trusting MealMiracle with your information.
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default Privacy;
