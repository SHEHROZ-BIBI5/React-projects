import React, { useState } from 'react';
import './ContactUs.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name} ${secondName}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h1>Contact Us</h1>

        <label>Your Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your name"
        />

        <label>Second Name:</label>
        <input
          type="text"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
          required
          placeholder="Enter your second name"
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
        />

        <label>Email Address:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
