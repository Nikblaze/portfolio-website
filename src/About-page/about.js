import React from "react";
import "./about.css";

export default function About() {
  return (
    <div>
      <h1 className="about-header">About</h1>
      <div className="about-text">
        <div className="golden-bar"></div>
        <div className="about-description">
          <span>
            With over 1.5+ years of substantial experience in software
            development and SAAS products, I presently oversee Frontend
            responsibilities for a SAAS Company's warehouse management product.
            Proficient in Angular and React frameworks, my skill set extends to
            include{" "}
            <span className="highlight">
              NodeJs, SQL, MongoDB, Database Management and Design Patterns
            </span>
            . I boast a commendable track record of consistently completing
            projects within prescribed timelines, underscoring my{" "}
            <span className="highlight">sense of ownership</span> and commitment
            to delivery excellence. Notably, I bring a collaborative ethos to
            the table, ensuring the{" "}
            <span className="highlight">efficient execution of projects</span>.
          </span>
        </div>
      </div>
    </div>
  );
}
