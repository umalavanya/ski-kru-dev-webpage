import { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <a href="/">
            <span className="logo-icon">⛷️</span>
            <span className="logo-text">SkiKru<span className="logo-highlight">Devs</span></span>
          </a>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>

        <div className="navbar-actions">
          <button className="btn-primary navbar-cta">Get Started</button>
          <div className="hamburger" onClick={toggleMenu}>
            <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;