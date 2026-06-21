import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">⛷️</span>
              <span className="logo-text">SkiKru<span className="logo-highlight">Devs</span></span>
            </div>
            <p className="footer-description">
              Building exceptional applications with React, Angular, MERN Stack, 
              Java Spring Boot, and AI/ML innovations.
            </p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Technologies</h4>
            <ul>
              <li>React & Angular</li>
              <li>MERN Stack</li>
              <li>Java Spring Boot</li>
              <li>AI/ML Research</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SkiKruDevs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;