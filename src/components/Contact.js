import React, { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - you can integrate with email service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactDetails = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'your.email@example.com',
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: '+234 XXX XXX XXXX',
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Nigeria',
    },
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: '#', label: 'GitHub' },
    { icon: <FiLinkedin />, url: '#', label: 'LinkedIn' },
    { icon: <FiTwitter />, url: '#', label: 'Twitter' },
    { icon: <FiInstagram />, url: '#', label: 'Instagram' },
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>
              Let's <span>Connect</span>
            </h2>
            <p>
              Have a project in mind or want to discuss opportunities? 
              I'm always open to new challenges and collaborations. 
              Let's create something amazing together!
            </p>

            <div className="contact-details">
              {contactDetails.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="icon">{item.icon}</div>
                  <div className="contact-item-content">
                    <h4>{item.label}</h4>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
