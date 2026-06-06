import React from 'react';
import { FiCode, FiLayout, FiTool, FiCpu, FiVideo, FiFilm } from 'react-icons/fi';
import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiWordpress,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiOpenai,
  SiGooglegemini,
  SiAnthropic
} from 'react-icons/si';
import { BiMobileAlt, BiSearchAlt, BiPencil } from 'react-icons/bi';
import { HiOutlineMail, HiOutlineLightBulb } from 'react-icons/hi';
import { PiCursor } from 'react-icons/pi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FiCode />,
      skills: [
        { name: 'React.js', level: 85, icon: <SiReact color="#61DAFB" /> },
        { name: 'JavaScript', level: 85, icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'HTML5 & CSS3', level: 95, icon: <SiHtml5 color="#E34F26" /> },
        { name: 'WordPress', level: 80, icon: <SiWordpress color="#21759B" /> },
      ],
    },
    {
      title: 'UI/UX Design',
      icon: <FiLayout />,
      skills: [
        { name: 'Figma', level: 90, icon: <SiFigma color="#F24E1E" /> },
        { name: 'Prototyping', level: 85, icon: <BiMobileAlt color="#05F8F8" /> },
        { name: 'User Research', level: 80, icon: <BiSearchAlt color="#05F8F8" /> },
        { name: 'Wireframing', level: 85, icon: <BiPencil color="#05F8F8" /> },
      ],
    },
    {
      title: 'Graphic Design',
      icon: <FiTool />,
      skills: [
        { name: 'Photoshop', level: 90, icon: <SiAdobephotoshop color="#31A8FF" /> },
        { name: 'Illustrator', level: 85, icon: <SiAdobeillustrator color="#FF9A00" /> },
        { name: 'Canva', level: 95, icon: <SiCanva color="#00C4CC" /> },
        { name: 'Brevo (Email)', level: 80, icon: <HiOutlineMail color="#05F8F8" /> },
      ],
    },
    {
      title: 'AI & Tools',
      icon: <FiCpu />,
      skills: [
        { name: 'ChatGPT', level: 95, icon: <SiOpenai color="#00A67E" /> },
        { name: 'Gemini', level: 90, icon: <SiGooglegemini color="#8E75B2" /> },
        { name: 'Claude AI', level: 90, icon: <SiAnthropic color="#D4A574" /> },
        { name: 'Cursor AI', level: 85, icon: <PiCursor color="#05F8F8" /> },
        { name: 'Kling AI', level: 80, icon: <FiVideo color="#05F8F8" /> },
        { name: 'CapCut', level: 60, icon: <FiFilm color="#05F8F8" /> },
        { name: 'AI Prompting', level: 95, icon: <HiOutlineLightBulb color="#FFD700" /> },
      ],
    },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A diverse skill set that spans development, design, and digital marketing. 
            Always learning and adapting to stay ahead in the ever-evolving tech landscape.
          </p>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-icon">
                {category.icon}
              </div>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-level">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
