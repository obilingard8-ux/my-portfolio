import React, { useState } from 'react';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

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
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Lagos, Nigeria · Available worldwide',
    },
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <p className="contact-eyebrow">05 / Start a conversation</p>
            <h2>Have a project<br />worth making?</h2>
            <p>
              I help businesses and product teams design and build websites, Shopify stores, and complete web platforms, with full-stack implementation available when needed. Share what you are building, where it currently stands, and what you need delivered.
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

          </div>

          <div className="contact-form-wrapper">
            <div className="contact-form-heading">
              <span>Project inquiry</span>
              <p>Share a few details and I'll get back to you.</p>
            </div>
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
                  placeholder="Project title or brand name"
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
                {isSubmitting ? 'Sending...' : 'Send Inquiry'} <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
