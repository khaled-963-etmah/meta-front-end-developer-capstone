// HomePage.js

import React from "react";
import "./HomePage.css"; // Import your styles here

import { useState } from "react";
import BookingFormModal from "../BookingFormModal/BookingFormModal";

const HomePage = () => {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle form submission
  const handleFormSubmit = (data) => {
    // Handle form submission logic (e.g., send data to backend)
    console.log("Form submitted:", data);
  };
  return (
    <div className="home-page">
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Welcome to Little Lemon Restaurant Chicago</h2>
            <p>
              Discover a delightful dining experience at Little Lemon Restaurant
              in the heart of Chicago. Our chefs craft exquisite dishes using
              fresh, local ingredients to satisfy your taste buds.
            </p>
            <button className="reserve-button" onClick={openModal}>
              Reserve a Table
            </button>
          </div>
          <div className="about-image">
            <img src="/path/to/about-image.jpg" alt="Little Lemon Restaurant" />
          </div>
        </div>
      </section>

      {/* Section 2: Specials */}
      <section className="specials-section">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Specials</h2>
          <button className="menu-button">View Online Menu</button>
        </div>

        <div className="dish-cards">
          {/* Dish Card 1 */}
          <div className="dish-card">
            <img src="/path/to/special-dish-1.jpg" alt="Special Dish 1" />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Special Dish 1</h3>
              <p className="price">$12.99</p>
            </div>
            <p>
              Description of the special dish. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <button className="order-button">Order a Delivery</button>
          </div>

          {/* Dish Card 2 */}
          <div className="dish-card">
            <img src="/path/to/special-dish-2.jpg" alt="Special Dish 2" />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Special Dish 2</h3>
              <p className="price">$14.99</p>
            </div>
            <p>
              Description of the special dish. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <button className="order-button">Order a Delivery</button>
          </div>

          {/* Dish Card 3 */}
          <div className="dish-card">
            <img src="/path/to/special-dish-3.jpg" alt="Special Dish 3" />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Special Dish 3</h3>
              <p className="price">$16.99</p>
            </div>
            <p>
              Description of the special dish. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <button className="order-button">Order a Delivery</button>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-card">
          <div className="testimonial-rating">★★★★★</div>
          <div className="testimonial-info">
            <h4>John Doe</h4>
            <img src="/path/to/john-doe-image.jpg" alt="John Doe" />
          </div>
          <p className="testimonial-text">
            "Excellent service and delicious food! Little Lemon Restaurant never
            disappoints. Highly recommended!"
          </p>
        </div>
      </section>
      <BookingFormModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default HomePage;
