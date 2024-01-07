import React from "react";
import "./projects.css";
import { useState } from "react";

function ProjectCards(props) {
  let { element } = props ?? {};
  let bgimg = element.src;

  const [isHovered, setIsHovered] = useState(false);

  var sectionStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    padding: "5px",
    backgroundColor: "rgba(18, 17, 17, 0.75)",
    display: isHovered ? "flex" : "none",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    borderRadius: "5%",
    transition: "top 1s ease",
  };

  const githubLink = element.github;

  return (
    <div
      className="project-card"
      style={sectionStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-description" style={overlayStyle}>
        <h2>{element.title}</h2>
        <div>{element.description}</div>
        <div>
          <button
            className="project-button"
            onClick={() => window.open(githubLink, "_blank")}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
