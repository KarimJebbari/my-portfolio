import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img 
            src="/karim_picture3.jpg" 
            alt="Karim Jebbari"
            className="nav-profile-image"
          />
          <h2>Karim Jebbari</h2>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
          <a href="#certificates" className="nav-link" onClick={closeMenu}>Certificates</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          <a 
            href="https://www.linkedin.com/in/karim-jebbari-b31315374/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link linkedin-link"
            onClick={closeMenu}
          >
            LinkedIn
          </a>
        </div>

        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;