import React from 'react';
import { FiCode, FiLayout, FiPenTool, FiTrendingUp, FiCreditCard, FiEye } from 'react-icons/fi';

const About = () => {
  const workItems = [
    {
      icon: <FiCreditCard />,
      title: 'Paysolo',
      text: 'Design the marketing website, landing-page interfaces, and campaign graphics for a European fintech company. My role focuses on clear visual communication across web and social channels.',
    },
    {
      icon: <FiEye />,
      title: 'Optika Dzani Zaro',
      text: 'Redesigned and built the complete Shopify e-commerce website for an eyewear and eye-care business in Bitola. I customized the storefront theme, configured the store through Shopify admin, and continue to support the brand with social media content.',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Independent work',
      text: 'Work with clients on responsive websites, interface design, logo identities, and marketing materials, taking projects from concept through final delivery.',
    },
  ];

  const highlights = [
    { icon: <FiCode />, text: 'Product Architecture' },
    { icon: <FiLayout />, text: 'Systems Design' },
    { icon: <FiPenTool />, text: 'Strategic Direction' },
    { icon: <FiTrendingUp />, text: 'Regulatory Workflows' },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-side">
          <div className="about-image-wrapper">
            <img 
              src="/Lingard=image2.webp" 
              alt="Obi Chibueze Vincent - Lingard"
              className="about-image-photo"
            />
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-item">
                <span className="icon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-content">
          <p className="about-label">02 / EXPERIENCE</p>
          <h2>
            One builder from interface direction to working platform.
          </h2>
          <p className="about-subline">
            My primary work is web and product design, supported by full-stack development. I can carry an idea through responsive interfaces, application logic, data and admin requirements, deployment, and Shopify implementation, while my visual-design background keeps every customer-facing touchpoint consistent.
          </p>

          <div className="about-work-list">
            {workItems.map((item, index) => (
              <div key={index} className="work-item">
                <div className="work-item-header">
                  <span className="work-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                </div>
                <p className="work-copy">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
