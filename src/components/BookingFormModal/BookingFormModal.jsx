// BookingFormModal.js

import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./BookingFormModal.css";
Modal.setAppElement("#root"); // Set the root element for accessibility

const BookingFormModal = ({ isOpen, onRequestClose, onFormSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onFormSubmit(data);
    onRequestClose();
  };
  const handleCloseModal = () => {
    onRequestClose();
    document.body.classList.remove("modal-open");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Booking Form"
      className="modal"
      overlayClassName="modal-overlay"
      bodyOpenClassName="modal-open"
    >
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          <span className="error-message">
            {errors.name && errors.name.message}
          </span>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          <span className="error-message">
            {errors.email && errors.email.message}
          </span>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            {...register("date", { required: "Date is required" })}
          />
          <span className="error-message">
            {errors.date && errors.date.message}
          </span>
        </div>

        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            {...register("time", { required: "Time is required" })}
          />
          <span className="error-message">
            {errors.time && errors.time.message}
          </span>
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            id="guests"
            {...register("guests", {
              required: "Number of guests is required",
              min: { value: 1, message: "Must be at least 1" },
            })}
          />
          <span className="error-message">
            {errors.guests && errors.guests.message}
          </span>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default BookingFormModal;
