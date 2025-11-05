import React from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { 
  FaHome, 
  FaProjectDiagram, 
  FaCode, 
  FaCertificate, 
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaHeart
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <img 
                src="/karim_picture3.jpg" 
                alt="Karim Jebbari"
                className="footer-profile"
              />
              <span className="footer-logo-text">Karim Jebbari</span>
            </div>
            <p className="footer-bio">
              Full Stack Developer passionate about creating amazing web experiences. 
              Let's build something incredible together!
            </p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home" className="footer-link">
              <FaHome className="link-icon" />
              Home
            </a>
            <a href="#projects" className="footer-link">
              <FaProjectDiagram className="link-icon" />
              Projects
            </a>
            <a href="#skills" className="footer-link">
              <FaCode className="link-icon" />
              Skills
            </a>
            <a href="#certificates" className="footer-link">
              <FaCertificate className="link-icon" />
              Certificates
            </a>
            <a href="#contact" className="footer-link">
              <FaEnvelope className="link-icon" />
              Contact
            </a>
          </div>

          <div className="footer-social">
            <h3>Connect With Me</h3>
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/karim-jebbari-b31315374/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="social-icon" />
              </a>
              <a 
                href="https://github.com/KarimJebbari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub className="social-icon" />
              </a>
              <a 
                href="https://twitter.com/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <FaTwitter className="social-icon" />
              </a>
              <a 
                href="mailto:jebbaritube4@gmail.com" 
                target="_blank" 
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {currentYear} Karim Jebbari. All rights reserved.
          </div>
        <div className="footer-made-with">
            Made with <FaLaptopCode className="computer" /> using React & CSS
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;