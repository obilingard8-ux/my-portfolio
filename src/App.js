import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const revealGroups = [
      '.hero-content',
      '.hero-image',
      '.about-label',
      '.about-content h2',
      '.about-subline',
      '.about-image-wrapper',
      '.highlight-item',
      '.work-item',
      '.projects-header',
      '.project-card',
      '.skills-header',
      '.skill-category',
      '.contact-info',
      '.contact-form-wrapper',
    ];

    const elements = document.querySelectorAll(revealGroups.join(','));
    elements.forEach((element, index) => {
      element.classList.add('scroll-reveal');
      element.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' }
    );

    elements.forEach(element => observer.observe(element));

    const progress = document.querySelector('.scroll-progress-bar');
    let frame;
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const amount = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (progress) progress.style.transform = `scaleX(${Math.min(Math.max(amount, 0), 1)})`;
      frame = undefined;
    };
    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="App">
      <div className="scroll-progress" aria-hidden="true"><span className="scroll-progress-bar" /></div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
