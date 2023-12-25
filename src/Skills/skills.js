import React from "react";
import "./skills.css";
import Git from "../assets/git-icon.png";
import Js from "../assets/js-icon.png";
import Cpp from "../assets/cpp-icon.png";
import Mdb from "../assets/download.jpeg";
import ReactIcon from "../assets/download.png";
import sqlIcon from "../assets/sql-icon.jpeg";
import AngularIcon from "../assets/angular-icon.png";
import Skillcard from "./skill-card";

function Skills() {
  let cards = [
    { Keyname: "Git Source Control", src: Git },
    { Keyname: "Javascript", src: Js },
    { Keyname: "TypeScript", src: Js },
    { Keyname: "C++", src: Cpp },
    { Keyname: "Angular", src: AngularIcon },
    { Keyname: "React", src: ReactIcon },
    { Keyname: "MongoDB", src: Mdb },
    { Keyname: "SQL", src: sqlIcon },
  ];
  let skillcards = [];
  cards.forEach((element, i) => {
    skillcards.push(
      <Skillcard key={i} name={element.Keyname} src={element.src} />
    );
  });
  return (
    <div>
      <h1 className="skills-header">My Skills</h1>
      <div className="card-container">{skillcards}</div>
    </div>
  );
}

export default Skills;
