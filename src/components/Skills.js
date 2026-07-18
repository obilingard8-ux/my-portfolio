import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      number: '01',
      title: 'UX & Interface Design',
      description: 'Clear product experiences shaped from structure to final interface, balancing business goals with intuitive journeys and coherent systems.',
      skills: ['Figma', 'Design systems', 'Prototyping', 'User research'],
      focus: 'Design',
    },
    {
      number: '02',
      title: 'Full-Stack & Shopify',
      description: 'Functional websites and web platforms built beyond the interface, including frontend implementation, application logic, data and admin requirements, deployment, and Shopify commerce configuration.',
      skills: ['React & Next.js', 'Node.js', 'JavaScript', 'Shopify'],
      focus: 'Build',
    },
    {
      number: '03',
      title: 'Brand Craft',
      description: 'Distinct visual languages designed to hold together across campaigns, social content, digital products, and physical brand touchpoints.',
      skills: ['Photoshop', 'Illustrator', 'Art direction', 'Typography'],
      focus: 'Shape',
    },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="skills-header">
          <div>
            <p className="skills-eyebrow">04 / Capabilities</p>
            <h2 className="section-title">Design first.<br />Built to function.</h2>
          </div>
          <div className="skills-intro">
            <p>My core practice combines web and product design with full-stack and Shopify delivery. Brand and campaign work supports the experience around the product.</p>
            <span>Web design · Product UI · Full-stack</span>
          </div>
        </div>

        <div className="skills-categories">
          {skillCategories.map(category => (
            <article key={category.number} className="skill-category">
              <div className="skill-number">{category.number}</div>
              <div className="skill-category-main">
                <p className="skill-focus">{category.focus}</p>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
              </div>
              <ul className="skills-list">
                {category.skills.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <aside className="skills-workflow-note">
          <span>Supporting workflow</span>
          <p>I use AI-assisted research, visual exploration, and coding support when they improve speed or range. Final direction, editing, implementation, and quality control remain my responsibility.</p>
        </aside>
      </div>
    </section>
  );
};

export default Skills;
