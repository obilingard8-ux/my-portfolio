import React from 'react';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const heroBgStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/real-hero-background.webp)`
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg" style={heroBgStyle}></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            Available for opportunities
          </div>
          
          <p className="hero-greeting">I'm</p>
          <h1 className="hero-title">
            Obi Vincent<span className="highlight">.</span>
          </h1>
          
          <div className="hero-roles">
            <span>Frontend Developer</span>
            <span className="separator"></span>
            <span>UI/UX Designer</span>
            <span className="separator"></span>
            <span>Graphic Designer</span>
          </div>
          
          <p className="hero-description">
            A passionate creative professional who transforms ideas into stunning digital experiences. 
            I bring growth to every project through innovative design and clean code, 
            leveraging cutting-edge tools including AI to deliver exceptional results.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <FiDownload /> Download CV
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img 
              src="/Lingard-image1.jpeg" 
              alt="Obi Chibueze Vincent - Lingard"
              className="hero-image-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
