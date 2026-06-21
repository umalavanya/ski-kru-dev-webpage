import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: '⚛️',
      title: 'React & Angular Development',
      description: 'Building responsive, high-performance single-page applications with React and Angular frameworks.',
      tags: ['React', 'Angular', 'TypeScript']
    },
    {
      icon: '🍃',
      title: 'MERN Stack Solutions',
      description: 'Full-stack development using MongoDB, Express.js, React, and Node.js for scalable web applications.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js']
    },
    {
      icon: '☕',
      title: 'Java Spring Boot',
      description: 'Enterprise-grade backend development with Java Spring Boot, creating robust REST APIs and microservices.',
      tags: ['Java', 'Spring Boot', 'REST API']
    },
    {
      icon: '🧠',
      title: 'AI/ML Research & Development',
      description: 'Advanced AI/ML solutions including Deep Neural Networks, UNet models for scientific research applications.',
      tags: ['Deep Learning', 'UNet', 'PyTorch', 'TensorFlow']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
          <p className="section-subtitle">
            We deliver cutting-edge technology solutions tailored to your business needs
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag, idx) => (
                  <span key={idx} className="service-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;