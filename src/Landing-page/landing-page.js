import React from "react";
import "./landing-page.css";
import profile from "../assets/profile.jpeg";
import About from "../About-page/about.js";
import Skills from "../Skills/skills.js";

import Experience from "../Experience/experience";
import Contacts from "../Contacts/contacts";
import CommonConnectedIcons from "../commonConnectedIcons";
import Projects from "../Projects/Projects";
import { useRef } from "react";

function LandingPage() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="first-page">
        <div className="header">
          <div className="header-options">
            <span className="options" onClick={() => scrollToRef(aboutRef)}>
              About
            </span>
          </div>
          <div className="header-options">
            <span className="options" onClick={() => scrollToRef(skillsRef)}>
              Skills
            </span>
          </div>
          <div className="header-options">
            <span
              className="options"
              onClick={() => scrollToRef(experienceRef)}
            >
              Experience
            </span>
          </div>
          <div className="header-options">
            <span className="options" onClick={() => scrollToRef(projectsRef)}>
              Projects
            </span>
          </div>
          <div className="header-options">
            <span className="options" onClick={() => scrollToRef(contactRef)}>
              Contact
            </span>
          </div>
        </div>
        <div className="body">
          <div className="profile-img">
            <img src={profile} alt="profile" height={610} width={610} />
          </div>
          <div className="message">
            <div className="title-message">
              <div>
                I'M<span className="name"> Nikhil Kumar</span>
              </div>
              <div className="job-title">Software Developer</div>
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
    </div>
  );
}

export default LandingPage;
