import React from 'react';
import { FiCode, FiLayout, FiPenTool, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  const highlights = [
    { icon: <FiCode />, text: 'Frontend Development' },
    { icon: <FiLayout />, text: 'UI/UX Design' },
    { icon: <FiPenTool />, text: 'Graphic Design' },
    { icon: <FiTrendingUp />, text: 'Digital Marketing' },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-image-wrapper">
          <img 
            src="/Lingard=image2.jpeg" 
            alt="Obi Chibueze Vincent - Lingard"
            className="about-image-photo"
          />
        </div>

        <div className="about-content">
          <h2>
            Driving <span>Growth</span> Through Creative Excellence
          </h2>
          
          <p className="about-text">
            I'm Obi Chibueze Vincent, but you can call me Lingard. At 24, I've dedicated myself 
            to mastering the intersection of design and technology. My journey has taken me 
            through frontend development, UI/UX design, graphic design, and digital marketing.
          </p>
          
          <p className="about-text">
            At Paysolo.io, I wore multiple hats—developing the entire frontend, crafting the 
            UI/UX experience, managing social media presence, and executing email marketing 
            campaigns. I've also designed and managed social media content for Strivepay, 
            demonstrating my versatility across different platforms and industries.
          </p>
          
          <p className="about-text">
            I believe in staying ahead of the curve. That's why I've embraced AI tools like 
            ChatGPT, Gemini, and others to enhance my workflow and deliver innovative solutions. 
            I'm not just adapting to the new age—I'm helping shape it.
          </p>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-item">
                <span className="icon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
