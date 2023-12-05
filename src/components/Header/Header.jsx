import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="brand">
        <h1>Restaurant Booking App</h1>
      </div>
      <nav className="nav">
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
