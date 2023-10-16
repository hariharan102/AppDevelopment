import React, { useEffect } from "react";
import "../Home.css";
import "../navbar";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="home-container">
        <section className="banner-section">
          <h1>Join Us in Making a Difference</h1>
          <p>Every Act of Kindness Matters</p>
          <p>
            At MealMiracle, we believe in the power of compassion and
            generosity. Together, we can make the world a better place—one
            donation at a time. Whether it's supporting a local cause or
            contributing to a global initiative, your act of kindness matters.
          </p>
         
        </section>

        <section className="image-gallery">
          <div className="image-card">
            <img
              src="https://st4.depositphotos.com/26566316/28362/i/450/depositphotos_283627928-stock-photo-homeless-people-hungry-people-line.jpg"
              alt="Education Cause"
              className="banner-image"
            />
            <h3>Education</h3>
            <p>Help children access quality education for a brighter future.</p>
          </div>

          <div className="image-card">
            <img
              src="https://st4.depositphotos.com/4218696/21601/i/1600/depositphotos_216019818-stock-photo-volunteers-packing-food-and-drinks.jpg"
              alt="Healthcare Cause"
              className="banner-image"
            />
            <h3>Healthcare</h3>
            <p>Support healthcare initiatives for those in need of medical assistance.</p>
          </div>

          <div className="image-card">
            <img
              src="https://st3.depositphotos.com/11433364/14784/i/1600/depositphotos_147847607-stock-photo-different-donation-food.jpg"
              alt="Environment Cause"
              className="banner-image"
            />
            <h3>Environment</h3>
            <p>Contribute to environmental conservation and sustainable practices.</p>
          </div>
        </section>

        <section className="impact-stories">
          <h2>Impact Stories</h2>
          <div className="story">
            <img
              src="https://previews.123rf.com/images/liudmilachernetska/liudmilachernetska2306/liudmilachernetska230689052/206960909-woman-taking-food-from-donation-box-on-wooden-floor-closeup.jpg"
              alt="Impact Story 1"
              className="impact-image"
            />
            <p>
              Your donations provided clean drinking water to a remote village,
              improving the lives of hundreds.
            </p>
          </div>
          <div className="story">
            <img
              src="https://previews.123rf.com/images/addtodsaporn/addtodsaporn1906/addtodsaporn190600417/124398502-concept-of-feeding-sharing-food-with-people-in-poor-communities-the-concept-of-sharing-help-to.jpg"
              alt="Impact Story 2"
              className="impact-image"
            />
            <p>
              Together, we built a school in an underserved community, giving
              children access to education.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Home;
