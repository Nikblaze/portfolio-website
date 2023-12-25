import React from "react";
import "./skill-card.css";

function Skillcard(props) {
  return (
    <div>
      <div className="card">
        <img src={props.src} height={80} width={80} alt="" />
        <div className="desc">{props.name}</div>
      </div>
    </div>
  );
}

export default Skillcard;
