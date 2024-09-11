import React, { useEffect, useState } from 'react';
import './landing-page.css';
import About from '../About-page/about.js';
import Skills from '../Skills/skills.js';

import Experience from '../Experience/experience';
import Contacts from '../Contacts/contacts';
import CommonConnectedIcons from '../common-components/commonConnectedIcons';
import Projects from '../Projects/Projects';
import ScrambledText from '../common-components/scrambleText.jsx';
import { useRef } from 'react';
import LoadingPage from '../Loading-page/loading-page.jsx';

function LandingPage() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Function to handle resize and update mobile status
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
  
    useEffect(() => {
      // Add resize listener on component mount
      window.addEventListener('resize', handleResize);
  
      // Cleanup resize listener on unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  const toggleMenu = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4700);
  }, []);

  const scrollToRef = (ref) => {
    toggleMenu();
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {loading ? (
        <LoadingPage/>
      ) : (
        <>
          <div className="first-page">
          <div className="header">
        <div className="hamburger" onClick={toggleMenu}>
          <div className={isOpen ? "line line1 rotate45" : "line line1"}></div>
          <div className={isOpen ? "line line2 fade-out" : "line line2"}></div>
          <div className={isOpen ? "line line3 rotate135" : "line line3"}></div>
        </div>

        <div className={isMobile ? (isOpen ? "side-panel open" : "side-panel") : "header-menu"}>
          <div className='header-options'>
          <span className="options" onClick={() => scrollToRef(aboutRef)}>
            About
          </span>
          </div>
          <div className='header-options'>
          <span className="options" onClick={() => scrollToRef(skillsRef)}>
            Skills
          </span>
          </div>
          <div className='header-options'>
          <span className="options" onClick={() => scrollToRef(experienceRef)}>
            Experience
          </span>
          </div>
          <div className='header-options'>
          <span className="options" onClick={() => scrollToRef(projectsRef)}>
            Projects
          </span>
          </div>
          <div className='header-options'>
          <span className="options" onClick={() => scrollToRef(contactRef)}>
            Contact
          </span>
          </div>
      </div>
    </div>
            <div className="body">
              <div className="message">
              <div>
              <ScrambledText text="I'M " scrambleSpeed={60} scrambleDelay={150} />
            <span className="name">
              <ScrambledText text=" Nikhil Kumar" scrambleSpeed={60} scrambleDelay={150} />
            </span>
          </div>
          <div className="job-title">
            <ScrambledText text="Software Developer" scrambleSpeed={60} scrambleDelay={150} />
          </div>
                <CommonConnectedIcons />
              </div>
            </div>
          </div>
          <div className="second-page">
            <section id="about" className="section" ref={aboutRef}>
              <About />
            </section>
            <section id="skills" className="section" ref={skillsRef}>
              <Skills />
            </section>
            <section id="projects" className="section" ref={projectsRef}>
              <Projects />
            </section>
            <section id="experience" className="section" ref={experienceRef}>
              <Experience />
            </section>
            <section id="contact" className="section" ref={contactRef}>
              <Contacts />
            </section>
          </div>
        </>
      )}
    </div>
  );
}

export default LandingPage;
