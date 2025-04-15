import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        {/* Social Media Links */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/faceIC.jpg" alt="Facebook" width={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter_3256013.png" alt="Twitter" width={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instaIC.jpg" alt="Instagram" width={30} />
          </a>
        </div>

        {/* Footer Links */}
        <div className="links">
          <a href="#home" className="text-gray-300 hover:text-white">Home</a>
          <a href="#gallery" className="text-gray-300 hover:text-white">Gallery</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact Us</a>
        </div>

        {/* Footer Text */}
        <p className="footer-text">© 2025 Animal Gallery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
