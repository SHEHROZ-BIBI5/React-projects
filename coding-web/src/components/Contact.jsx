import React from 'react';
import './Contact.css'; // CSS فائل امپورٹ کریں

function Contact() {
  return (
    <div className="contact-page">
      <form className="contact-form">
        <h1>CONTACT US</h1>

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
