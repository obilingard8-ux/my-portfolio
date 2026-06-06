import React, { useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'graphics', label: 'Graphics' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Paysolo.io',
      description: 'Complete frontend development and UI/UX design for a fintech payment platform. Built with modern technologies and optimized for performance.',
      category: 'frontend',
      tech: ['React', 'JavaScript', 'CSS3', 'Figma'],
      icon: '💳',
      liveUrl: 'https://paysolo.io',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Paysolo Brand Identity',
      description: 'Comprehensive social media design and brand management. Created engaging visual content that increased brand awareness and user engagement.',
      category: 'graphics',
      tech: ['Photoshop', 'Illustrator', 'Canva'],
      icon: '🎨',
      liveUrl: '#',
      githubUrl: null,
    },
    {
      id: 4,
      title: 'Paysolo UI/UX Design',
      description: 'User interface and experience design for the Paysolo platform. Focused on intuitive navigation and seamless user journeys.',
      category: 'design',
      tech: ['Figma', 'Adobe XD', 'Prototyping'],
      icon: '✨',
      liveUrl: '#',
      githubUrl: null,
    },
    {
      id: 5,
      title: 'Social Media Content & Flyer Designs',
      description: 'Created engaging social media content and flyer designs for various projects. Delivered eye-catching visuals for posts, campaigns, and promotional materials.',
      category: 'graphics',
      tech: ['Photoshop', 'Canva', 'Illustrator'],
      icon: '🖼️',
      liveUrl: '#',
      githubUrl: null,
    },
    {
      id: 6,
      title: 'Shopify Optika — Full Branding',
      description: 'Complete branding project for Shopify Optika. Developed brand identity, visual assets, and cohesive design across digital touchpoints.',
      category: 'graphics',
      tech: ['Shopify', 'Branding', 'Photoshop', 'Canva'],
      icon: '🛍️',
      liveUrl: '#',
      githubUrl: null,
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my work across frontend development, UI/UX design, 
            and graphic design. Each project represents my commitment to excellence.
          </p>
        </div>

        <div className="projects-filter">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-image-placeholder">
                  {project.icon}
                  <span>Project Preview</span>
                </div>
                <div className="project-overlay">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      className="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View live project"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      className="project-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View source code"
                    >
                      <FiGithub />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
