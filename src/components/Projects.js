import React, { useEffect, useState } from 'react';
import { FiExternalLink, FiCreditCard, FiEye, FiLayers, FiCheck, FiX, FiArrowUpRight } from 'react-icons/fi';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return undefined;
    const handleKeyDown = event => event.key === 'Escape' && setSelectedProject(null);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      icon: <FiCreditCard />,
      title: 'Paysolo.io',
      description: 'A continuing web and campaign design engagement for a European fintech brand, connecting its marketing website and social communication through one clear visual direction.',
      category: 'Fintech · Web & Campaign',
      liveUrl: 'https://paysolo.io',
      previewImage: '/paysolo-hero.webp',
      mockup: 'beach-laptop',
      generatedCover: '/paysolo-beach-laptop-cover.webp',
      caseStudy: true,
      caseTheme: 'paysolo',
      kicker: 'Fintech · Web design · Campaign content',
      previewTitle: 'Making a technical financial brand easier to understand across web and social.',
      client: 'Paysolo',
      discipline: 'UI, web & graphic design',
      engagement: 'Remote · Jun 2025 to present',
      introHeading: 'A consistent digital presence for a fintech company preparing to serve a European audience.',
      projectSummary: 'Paysolo needed customer-facing design that could explain its offer clearly while maintaining a recognizable visual identity. My responsibility is the branded digital experience: landing-page and marketing website design, responsive presentation, campaign visuals, and social content. I do not work on the company’s financial infrastructure or backend systems.',
      deliverables: ['Website UI', 'Responsive layouts', 'Campaign direction', 'Social graphics'],
      process: [
        { number: '01', title: 'Clarify the message', copy: 'I turn supplied product topics and fintech messaging into a clear content hierarchy before deciding how each page or campaign should look.' },
        { number: '02', title: 'Build one visual direction', copy: 'Layouts, typography, color, imagery, and recurring graphic elements are developed as a connected system rather than isolated pieces.' },
        { number: '03', title: 'Adapt across channels', copy: 'The direction is carried into responsive website sections, landing pages, announcements, educational posts, and promotional content.' },
      ],
      galleryImages: [
        { src: '/paysolo-beach-laptop-cover.webp', title: 'Marketing Website Hero', copy: 'The homepage hero introduces the exchange proposition with a clear headline, direct action, and a visual system designed around the Paysolo brand.', href: 'https://paysolo.io', linkLabel: 'Visit Paysolo website', contained: true },
        { src: '/paysolo-iphone-hand-cover-real.webp', title: 'Campaign Content System', copy: 'The phone presentation shows the real Paysolo Instagram profile and how the blue-led identity extends into product education, announcements, and recurring promotional communication.', href: 'https://www.instagram.com/paysolo.io/', linkLabel: 'View Paysolo Instagram', contained: true },
      ],
      outcomeHeading: 'A more coherent brand experience, with room to keep evolving.',
      outcomeCopy: 'The work gives Paysolo a consistent visual foundation across its marketing website and social channels. Because the engagement is ongoing, the system continues to expand as new topics, campaigns, and website requirements are introduced.',
      feedbackLabel: 'Continuing engagement',
      feedbackQuote: 'Bravo Lingard, just keep up this style. I like it. All are amazing.',
      feedbackSource: 'Paysolo team feedback following pitch-deck delivery',
      feedbackText: 'Paysolo has also continued working with me remotely since June 18, 2025, providing further evidence of trust in my ability to deliver website and campaign design consistently.',
      proofLinks: [
        { label: 'Live marketing website', href: 'https://paysolo.io' },
        { label: 'Published social content', href: 'https://www.instagram.com/paysolo.io/' },
      ],
      footerTagline: 'One fintech brand across every public-facing channel.',
    },
    {
      id: 2,
      icon: <FiEye />,
      title: 'Optika Dzani Zaro',
      description: 'An end-to-end Shopify redesign and implementation supported by retail graphics, campaign assets, and continuing social content for an established eyewear business.',
      category: 'Shopify · Brand & Retail',
      liveUrl: 'https://optikazaro.mk/',
      previewImage: '/optika-dzani-zaro-web.webp',
      mockup: 'optika-laptop',
      generatedCover: '/optika-boutique-laptop-cover.webp',
      caseStudy: true,
      caseTheme: 'optika',
      kicker: 'Shopify · E-commerce · Retail design',
      previewTitle: 'Rebuilding the online shop and carrying the brand into every customer touchpoint.',
      client: 'Optika Dzani Zaro',
      discipline: 'Design, Shopify build & graphics',
      engagement: 'Four-month build · Ongoing content',
      introHeading: 'A complete Shopify store, redesigned and configured to operate as a real online retail channel.',
      projectSummary: 'Optika Dzani Zaro needed more than a visual website concept. I redesigned and customized the existing Shopify theme, built the customer-facing storefront, organized the commerce experience, and configured the store through Shopify admin so it could function as an operational online shop. I then extended the direction into retail, print, campaign, and social assets.',
      deliverables: ['Shopify redesign', 'Store configuration', 'Responsive storefront', 'Retail & campaign assets'],
      process: [
        { number: '01', title: 'Restructure the storefront', copy: 'I reviewed the existing theme and reorganized the customer-facing experience around clearer navigation, product discovery, promotional messaging, and responsive presentation.' },
        { number: '02', title: 'Customize and configure Shopify', copy: 'I adapted the theme to the approved direction and connected the store structure through Shopify admin so content, products, and essential commerce functions worked together.' },
        { number: '03', title: 'Extend the experience offline', copy: 'Website graphics, banners, vouchers, notices, complimentary cards, stickers, and social content were designed to feel like parts of the same customer experience.' },
      ],
      galleryImages: [
        { src: '/optika-boutique-laptop-cover.webp', title: 'Shopify Storefront', copy: 'The redesigned storefront introduces the collection through a clear retail hierarchy while preserving the established Optika character.', href: 'https://optikazaro.mk/', linkLabel: 'Visit Optika website', contained: true },
        { src: '/Optika-project-images/website-design.webp', title: 'Website Direction', copy: 'The visual direction uses strong product imagery, focused promotional messaging, and responsive layouts to support browsing and shopping.' },
        { src: '/Optika-project-images/shop-banner.webp', title: 'Shop Banner', copy: 'A large-format storefront statement designed for instant recognition. The bold blue field, confident typography, and eyewear imagery carry the brand clearly across physical space.' },
        { src: '/Optika-project-images/social-media-post.webp', title: 'Social Media Campaign', copy: 'A flexible promotional layout built for quick reading on mobile. The campaign retains Optika’s visual character while giving offers, products, and seasonal messages a consistent social presence.' },
        { src: '/optika-voucher-flatlay-cover.webp', title: 'Voucher Front', copy: 'The voucher front creates a gift-like first impression, using restrained composition and premium imagery to make a promotional item feel considered and valuable.' },
        { src: '/Optika-project-images/vocher-card.webp', title: 'Voucher Card System', copy: 'The full voucher system balances brand expression with practical information, creating a piece that works equally well at the counter, inside packaging, or as a customer gift.' },
        { src: '/Optika-project-images/complimentry-card.webp', title: 'Complimentary Card', copy: 'A refined customer-care touchpoint for thank-you notes and special gestures. It extends the boutique experience beyond the purchase and gives the brand a warmer, more personal voice.' },
        { src: '/Optika-project-images/shop-notice.webp', title: 'In-store Notice', copy: 'A functional retail message treated as part of the identity. Clear hierarchy makes the information easy to scan, while the color and typography keep it unmistakably Optika.' },
        { src: '/Optika-project-images/sticker.webp', title: 'Brand Sticker', copy: 'A compact brand signature designed for packaging, cases, and retail moments. It turns a small production detail into a recognizable finishing touch.' },
      ],
      outcomeHeading: 'A functioning online store supported by one connected visual system.',
      outcomeCopy: 'The completed work gave Optika Dzani Zaro a redesigned Shopify storefront that could be managed through the platform’s admin, alongside coordinated assets for retail and promotion. After the main four-month project, I continued supporting the business with social content.',
      feedbackLabel: 'Post-launch relationship',
      feedbackText: 'After I delivered the main four-month Shopify and visual-design project, Optika Dzani Zaro retained me to continue creating social media content. The continued engagement provides practical evidence that the delivered work met an ongoing business need.',
      proofLinks: [
        { label: 'Live Shopify store', href: 'https://optikazaro.mk/' },
        { label: 'Delivered design collection', href: '#optika-selected-output' },
      ],
      footerTagline: 'From Shopify storefront to in-store detail.',
    },
    {
      id: 6,
      icon: <FiLayers />,
      title: 'Matano Complex',
      description: 'Designed the Matano Complex logo concept, monogram, wordmark, and presentation mockups to demonstrate how the identity could appear across signage, print, and digital applications.',
      category: 'Logo & Identity',
      liveUrl: 'https://www.behance.net/gallery/191975403/Matano-complex-Logo',
      externalCard: true,
      previewImage: '/matano-complex-cover.webp',
      ctaLabel: 'View Behance case study',
      externalPlatform: 'Behance',
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="projects-eyebrow">03 / Selected work</p>
            <h2 className="section-title">Selected client work</h2>
          </div>
          <p className="section-subtitle">
            Three focused engagements across fintech, Shopify commerce, and identity design.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${(project.caseStudy || project.externalCard) ? 'project-card-clickable' : ''}`}
              onClick={event => {
                if (project.caseStudy && !event.target.closest('a')) setSelectedProject(project);
                if (project.externalCard && !event.target.closest('a')) window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
              }}
              onKeyDown={event => {
                if (project.caseStudy && (event.key === 'Enter' || event.key === ' ')) {
                  event.preventDefault();
                  setSelectedProject(project);
                }
                if (project.externalCard && (event.key === 'Enter' || event.key === ' ')) {
                  event.preventDefault();
                  window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                }
              }}
              role={(project.caseStudy || project.externalCard) ? 'button' : undefined}
              tabIndex={(project.caseStudy || project.externalCard) ? 0 : undefined}
              aria-label={project.caseStudy ? `Open ${project.title} case study` : project.externalCard ? `View ${project.title} on ${project.externalPlatform || 'external site'}` : undefined}
            >
              <div className="project-card-top">
                <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <div className={`project-image ${project.mockup === 'laptop' ? 'project-image-laptop' : ''} ${project.mockup === 'beach-laptop' ? 'project-image-generated project-image-paysolo' : ''} ${project.mockup === 'optika-laptop' ? 'project-image-generated project-image-optika' : ''} ${project.mockup === 'voucher-flatlay' ? 'project-image-generated project-image-voucher' : ''}`}>
                <div className="project-image-placeholder project-image-screenshot">
                  {project.previewImage ? (
                    (project.mockup === 'beach-laptop' || project.mockup === 'optika-laptop') ? (
                      <div className={`generated-laptop-cover ${project.mockup === 'optika-laptop' ? 'generated-laptop-optika' : 'generated-laptop-paysolo'}`}>
                        <img className="generated-cover-scene" src={project.generatedCover} alt={`${project.title} project presentation`} />
                        <img className="generated-cover-screen" src={project.previewImage} alt={`${project.title} website screenshot`} />
                      </div>
                    ) : project.mockup === 'laptop' ? (
                      <div className="laptop-mockup">
                        <div className="laptop-screen">
                          <img src={project.previewImage} alt={`${project.title} website preview`} />
                        </div>
                        <div className="laptop-base"><span /></div>
                      </div>
                    ) : (
                      <img
                        className="project-preview-image"
                        src={project.previewImage}
                        alt={`${project.title} hero preview`}
                      />
                    )
                  ) : (
                    <div className="screenshot-body">
                      <p className="project-preview-title">{project.preview || 'Case study preview'}</p>
                      {project.previewHeadline && <h4>{project.previewHeadline}</h4>}
                      {project.previewText && <p className="project-preview-text">{project.previewText}</p>}
                    </div>
                  )}
                </div>
                <div className="project-overlay">
                  {project.caseStudy ? (
                    <span className="project-live-label">Read case study <FiArrowUpRight /></span>
                  ) : project.liveUrl ? (
                    <a 
                      href={project.liveUrl} 
                      className="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View live project"
                    >
                      <span>View project</span><FiExternalLink />
                    </a>
                  ) : (
                    <span className="project-live-label">View project <FiArrowUpRight /></span>
                  )}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.caseStudy ? (
                  <button className="project-cta-link project-cta-button" onClick={() => setSelectedProject(project)}>
                    Read case study →
                  </button>
                ) : project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="project-cta-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.ctaLabel || 'View hero page'} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-study-title" onMouseDown={() => setSelectedProject(null)}>
          <article className={`case-modal-panel case-theme-${selectedProject.caseTheme}`} onMouseDown={event => event.stopPropagation()}>
            <button className="case-modal-close" onClick={() => setSelectedProject(null)} aria-label="Close case study"><FiX /></button>

            <header className="case-hero">
              <div className="case-kicker">{selectedProject.kicker}</div>
              <h2 id="case-study-title">{selectedProject.title}</h2>
              <p>{selectedProject.previewTitle}</p>
              <div className="case-meta">
                <span><small>Client</small>{selectedProject.client}</span>
                <span><small>My role</small>{selectedProject.discipline}</span>
                <span><small>Engagement</small>{selectedProject.engagement}</span>
              </div>
            </header>

            <section className="case-intro">
              <p className="case-section-number">01 / Context and scope</p>
              <div>
                <h3>{selectedProject.introHeading}</h3>
                <p>{selectedProject.projectSummary}</p>
              </div>
            </section>

            <section className="case-services">
              {selectedProject.deliverables.map(item => <span key={item}><FiCheck /> {item}</span>)}
            </section>

            <section className="case-process">
              <div className="case-process-heading">
                <p className="case-section-number">02 / Approach</p>
                <h3>How I moved the work from requirement to delivery.</h3>
              </div>
              <div className="case-process-grid">
                {selectedProject.process.map(item => (
                  <article key={item.number}>
                    <span>{item.number}</span>
                    <h4>{item.title}</h4>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            </section>

            <div className="case-gallery-long" id={`${selectedProject.caseTheme}-selected-output`}>
              <div className="case-gallery-heading">
                <p className="case-section-number">03 / Selected output</p>
                <h3>Work produced across the engagement.</h3>
              </div>
              {selectedProject.galleryImages.map((image, index) => (
                <figure className={`case-work case-work-${index + 1}`} key={image.src}>
                  <div className={`case-image-wrap ${image.href ? 'case-image-linked' : ''} ${image.contained ? 'case-image-contained' : ''}`}>
                    {image.href ? (
                      <a href={image.href} target="_blank" rel="noopener noreferrer" aria-label={`${image.linkLabel}: ${image.title}`}>
                        <img src={image.src} alt={image.title} loading="lazy" decoding="async" />
                        <span>{image.linkLabel} <FiExternalLink /></span>
                      </a>
                    ) : (
                      <img src={image.src} alt={image.title} loading="lazy" decoding="async" />
                    )}
                  </div>
                  <figcaption>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div><h3>{image.title}</h3><p>{image.copy}</p></div>
                  </figcaption>
                </figure>
              ))}
            </div>

            <section className="case-outcome">
              <p className="case-section-number">04 / Outcome</p>
              <div>
                <h3>{selectedProject.outcomeHeading}</h3>
                <p>{selectedProject.outcomeCopy}</p>
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                  Visit live project <FiExternalLink />
                </a>
              </div>
            </section>

            <section className="case-proof">
              <div className="case-proof-heading">
                <p className="case-section-number">05 / Proof and client trust</p>
                <h3>Evidence that the work moved beyond presentation.</h3>
              </div>
              <div className="case-feedback">
                <span>{selectedProject.feedbackLabel}</span>
                {selectedProject.feedbackQuote && (
                  <blockquote>
                    “{selectedProject.feedbackQuote}”
                    <cite>{selectedProject.feedbackSource}</cite>
                  </blockquote>
                )}
                <p>{selectedProject.feedbackText}</p>
              </div>
              <div className="case-proof-links">
                {selectedProject.proofLinks.map(link => (
                  <a key={link.label} href={link.href} target={link.href.startsWith('#') ? undefined : '_blank'} rel={link.href.startsWith('#') ? undefined : 'noopener noreferrer'}>
                    <span>{link.label}</span><FiExternalLink />
                  </a>
                ))}
              </div>
            </section>

            <footer className="case-footer">
              <p>{selectedProject.footerTagline}</p>
              <h2>Clear scope.<br />Connected delivery.</h2>
              <button onClick={() => setSelectedProject(null)}>Back to projects <FiX /></button>
            </footer>
          </article>
        </div>
      )}
    </section>
  );
};

export default Projects;
