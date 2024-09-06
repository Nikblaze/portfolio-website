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
    { Keyname: "React", src: ReactIcon, rating: 4 },
    { Keyname: "Angular", src: AngularIcon, rating: 4.5 },
    { Keyname: "Javascript", src: Js, rating: 4.5  },
    { Keyname: "TypeScript", src: Ts, rating: 4  },
    { Keyname: "HTML & CSS", src: HtmlcssIcon, rating: 5  },
    { Keyname: "C++", src: Cpp, rating: 4.5  },
    { Keyname: "NodeJs", src: NodeIcon, rating: 4  },
    { Keyname: "MongoDB", src: Mdb, rating: 3.5  },
    { Keyname: "SQL", src: sqlIcon, rating: 4  },
    { Keyname: "Docker", src: dockerIcon , rating: 3.5 },
    { Keyname: "Git Source Control", src: Git , rating: 4 },
  ];
  let skillcards = [];
  cards.forEach((element, i) => {
    skillcards.push(
      <Skillcard key={i} name={element.Keyname} src={element.src} rating={element.rating}/>
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
