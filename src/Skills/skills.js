import React from "react";
import "./skills.css";
import Skillcard from "./skill-card";

import Git from "../assets/git-icon.png";
import Js from "../assets/js-icon.png";
import Cpp from "../assets/cpp-icon.png";
import Mdb from "../assets/mdb-icon.png";
import ReactIcon from "../assets/react-icon.png";
import sqlIcon from "../assets/sql-icon.png";
import AngularIcon from "../assets/angular-icon.png";
import Ts from "../assets/ts-icon.png";
import NodeIcon from "../assets/node-icon.png";
import dockerIcon from "../assets/docker-icon.png";
import HtmlcssIcon from "../assets/htmlcss-icon.png";

function Skills() {
  let cards = [
    { Keyname: "React", src: ReactIcon },
    { Keyname: "Angular", src: AngularIcon },
    { Keyname: "Javascript", src: Js },
    { Keyname: "TypeScript", src: Ts },
    { Keyname: "HTML & CSS", src: HtmlcssIcon },
    { Keyname: "C++", src: Cpp },
    { Keyname: "NodeJs", src: NodeIcon },
    { Keyname: "MongoDB", src: Mdb },
    { Keyname: "SQL", src: sqlIcon },
    { Keyname: "Docker", src: dockerIcon },
    { Keyname: "Git Source Control", src: Git },
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
