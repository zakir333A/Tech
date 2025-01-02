import React from "react";
import { FaLocationDot, FaPhone, FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa6";
import './Footer.css';
function FootContact() {
  return (
    <div className="foot-contact">
      <h4 className="foot-contact-title">Əlaqə</h4>
      <ul className="contact-details">
        <li>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
            <FaLocationDot className="contact-icon" />
            Nizami rayon, Mehdi Abbasov 121
          </a>
        </li>
        <li>
          <a href="tel:0558650545">
            <FaPhone className="contact-icon" />
            (055) 865 05 45
          </a>
        </li>
      </ul>
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
}

export default FootContact;
