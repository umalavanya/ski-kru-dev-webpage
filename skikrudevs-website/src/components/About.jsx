import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">
              Who We <span className="text-gradient">Are</span>
            </h2>
            <p className="about-description">
              SkiKruDevs is a team of passionate developers and researchers dedicated to 
              building exceptional digital solutions. With expertise spanning frontend, 
              backend, and AI/ML technologies, we transform complex problems into 
              elegant, scalable applications.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <div>
                  <h4>Mission-Driven</h4>
                  <p>Delivering innovative solutions that drive business growth</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💡</span>
                <div>
                  <h4>Innovation First</h4>
                  <p>Leveraging cutting-edge technologies and best practices</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🤝</span>
                <div>
                  <h4>Client-Centric</h4>
                  <p>Building lasting partnerships through quality and trust</p>
                </div>
              </div>
            </div>
            <button className="btn-primary">Learn More About Us</button>
          </div>
          <div className="about-image">
            <div className="about-card">
              <div className="about-stats-grid">
                <div className="about-stat">
                  <span className="about-stat-number">100%</span>
                  <span className="about-stat-label">Client Satisfaction</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">24/7</span>
                  <span className="about-stat-label">Support Available</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">99.9%</span>
                  <span className="about-stat-label">Uptime Guarantee</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">50+</span>
                  <span className="about-stat-label">Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;