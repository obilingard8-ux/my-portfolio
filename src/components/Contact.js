import React, { useState } from 'react';
import { FiMail, FiSend, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp, FaFacebook, FaBehance } from 'react-icons/fa';

const CONTACT_EMAIL = 'chibuezeobi.v@gmail.com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status.message) {
      setStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio message: ${formData.subject}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent. I will get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact me via WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: CONTACT_EMAIL,
    },
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      value: '+234 7026137298',
      href: 'https://wa.me/2347026137298',
    },
  ];

  const socialLinks = [
    { icon: <FaBehance />, url: 'https://www.behance.net/lingardobi', label: 'Behance' },
    { icon: <FaFacebook />, url: 'https://www.facebook.com/share/1Hqdx7Lvy4/?mibextid=wwXIfr', label: 'Facebook' },
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
              {contactDetails.map((item, index) => {
                const content = (
                  <>
                    <div className="icon">{item.icon}</div>
                    <div className="contact-item-content">
                      <h4>{item.label}</h4>
                      <p>{item.value}</p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    className="contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index} className="contact-item">
                    {content}
                  </div>
                );
              })}
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
              {status.message && (
                <p className={`form-status form-status--${status.type}`}>
                  {status.message}
                </p>
              )}
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'} <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
