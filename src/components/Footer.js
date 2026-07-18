import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {currentYear} <span>Obi Chibueze Vincent</span>. Web, product and full-stack delivery.
        </p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://www.behance.net/lingardobi" target="_blank" rel="noopener noreferrer">Behance</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
