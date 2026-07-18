import React, { useState, useEffect } from 'react';
import { FaBehance } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="logo">
          <img src="/obi-vincent-mark.webp" alt="" className="logo-mark" />
          <span>Obi Vincent</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMenu}>Work</a></li>
          <li><a href="/Obi-Chibueze-Vincent-CV.html" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>CV</a></li>
          <li>
            <a className="nav-behance" href="https://www.behance.net/lingardobi" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              <FaBehance aria-hidden="true" /> <span>Behance</span>
            </a>
          </li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
