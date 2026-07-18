import React from 'react';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="hero hero--light hero-editorial" id="home">
      <div className="container hero-editorial-shell">
        <div className="hero-editorial-meta">
          <p>01 / Web & Product Designer</p>
          <p>Lagos based / Working globally</p>
        </div>

        <div className="hero-editorial-main">
          <div className="hero-editorial-copy">
            <h1 className="hero-title">
              <span>I turn digital ideas</span>
              <span>into designed,</span>
              <span className="highlight">working platforms.</span>
            </h1>

            <div className="hero-editorial-intro">
              <p>
                Web and product design with full-stack and Shopify delivery,
                from interface direction to working infrastructure.
              </p>
              <div className="hero-buttons">
                <a
                  href="https://calendar.app.google/USmSJ2pT1PmjFqWU8"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discuss a project <FiArrowUpRight />
                </a>
                <a href="#projects" className="hero-work-link">
                  View selected work <FiArrowDownRight />
                </a>
              </div>
            </div>

            <ul className="hero-service-rail" aria-label="Core services">
              <li>Product direction</li>
              <li>Interface design</li>
              <li>Full-stack delivery</li>
              <li>Shopify commerce</li>
            </ul>
          </div>

          <div className="hero-editorial-visual">
            <figure className="hero-portrait">
              <img src="/Lingard-image1.webp" alt="Obi Vincent, web and product designer" />
              <figcaption>
                <span>Obi Vincent</span>
                <span>Design / Development</span>
              </figcaption>
            </figure>

          </div>
        </div>

        <div className="hero-evidence" aria-label="Selected experience">
          <a href="#projects"><span>01</span><strong>Paysolo</strong><small>Ongoing fintech design partnership</small><FiArrowUpRight /></a>
          <a href="#projects"><span>02</span><strong>Optika Dzani Zaro</strong><small>Shopify store delivered end to end</small><FiArrowUpRight /></a>
          <div><span>03</span><strong>Independent practice</strong><small>Three years in design and development</small></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
