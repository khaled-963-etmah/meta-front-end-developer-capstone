
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Pages</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            {/* Add more page links as needed */}
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <p>Email: info@restaurant.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div className="footer-section">
          <h2>Social Media</h2>
          <ul>
            <li>
              <a
                href="https://twitter.com/restaurant"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/restaurant"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            {/* Add more social media links as needed */}
          </ul>
        </div>
        <div className="footer-section">
          <img src="/path/to/your/logo.png" alt="Restaurant Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
