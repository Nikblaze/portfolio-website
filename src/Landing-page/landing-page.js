import React from "react";
import "./landing-page.css";
import profile from "../assets/profile.jpeg";
import About from "../About-page/about.js";
import Skills from "../Skills/skills.js";

import {
  BiLogoFacebookCircle,
  BiLogoLinkedin,
  BiLogoGmail,
} from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function LandingPage() {
  return (
    <div>
      <div className="first-page">
        <div className="header">
          <div className="header-options">
            <span className="options">About</span>
          </div>
          <div className="header-options">
            <span className="options">Skills</span>
          </div>
          <div className="header-options">
            <span className="options">Experience</span>
          </div>
          <div className="header-options">
            <span className="options">Projects</span>
          </div>
          <div className="header-options">
            <span className="options">Contact</span>
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
              <div className="desc">Software Developer</div>
            </div>
            <div className="connect-icons">
              <div className="bar"></div>
              <BsGithub className="icons" />
              <BiLogoLinkedin className="icons" />
              <BiLogoGmail className="icons" />
              <BiLogoFacebookCircle className="icons" />

              <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-page">
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default LandingPage;
