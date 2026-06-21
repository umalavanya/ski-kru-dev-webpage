import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🚀</span>
            <span>Innovating the Future of Development</span>
          </div>
          <h1 className="hero-title">
            Build <span className="text-gradient">Exceptional</span> Applications
            <br />with <span className="text-gradient">SkiKruDevs</span>
          </h1>
          <p className="hero-description">
            We craft cutting-edge web applications using React, Angular, MERN Stack, 
            Java Spring Boot, and power scientific research with AI/ML innovations.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Our Work</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-illustration">
            <div className="floating-card card-1">
              <span>⚛️</span>
              <span>React</span>
            </div>
            <div className="floating-card card-2">
              <span>🅰️</span>
              <span>Angular</span>
            </div>
            <div className="floating-card card-3">
              <span>🍃</span>
              <span>Spring Boot</span>
            </div>
            <div className="floating-card card-4">
              <span>🤖</span>
              <span>AI/ML</span>
            </div>
            <div className="hero-circle"></div>
            <div className="hero-circle-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;