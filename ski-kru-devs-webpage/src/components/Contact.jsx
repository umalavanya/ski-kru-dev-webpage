import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-item">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email Us</h4>
                <p>hello@skikrudevs.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Visit Us</h4>
                <p>Silicon Valley, CA</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-icon">📱</span>
              <div>
                <h4>Call Us</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;