import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';




function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="https://www.facebook.com/" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          
          <a href="https://twitter.com/Adaikkappa1738" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/_xharx__/" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
         
          <a href="https://github.com/hariharan102" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>MealMiracle
              </h6>
              <p>
               
              </p>
            </div>

           

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <Link to="/about">
                <a  className="text-reset">About Us</a>
                </Link>
              </p>
              <p>
                <Link to="/contact">

                <a href="#!" className="text-reset">ContactcUs</a>
                </Link>
              </p>
              <p>
                <Link to="/faq">

                <a  className="text-reset">FAQ</a>
                </Link>
              </p>
              <p>
                <Link to="/privacy">

                <a href="#!" className="text-reset">Privacy Policy</a>
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> Saidhaan Enclave ,Coimbatore</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                727821tuit027@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i>+91 7358851402</p>
              <p><i className="fas fa-print me-3"></i>+91 9487827812</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:MealMiracle
        </div>
    </footer>
  );
}

export default Footer;
