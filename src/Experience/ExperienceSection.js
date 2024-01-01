import React from "react";
import "./experience.css";

function ExperienceSection(props) {
  let { element } = props;
  return (
    <div className="container">
      <div className="date-range">
        <span className="selected-date">{element.DateRange}</span>
      </div>
      <div className="separation-bar">
        <div className="circle"></div>
        <div className="verticle"></div>
      </div>
      <div className="details">
        <div className="title">{element.title}</div>
        <div className="location">{element.location}</div>
        <div className="description">{element.description}</div>
      </div>
    </div>
  );
}

export default ExperienceSection;
