import React from "react";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

function CommonConnectedIcons() {
  return (
    <div>
      <div className="connect-icons">
        <div className="bar"></div>
        <div className="icon-list">
          <BsGithub
            className="icons"
            onClick={() => window.open("https://github.com/Nikblaze", "_blank")}
          />
          <BiLogoLinkedin
            className="icons"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/nikhilkumar237/",
                "_blank"
              )
            }
          />
          <BiLogoGmail
            className="icons"
            href="mailto:kumarnikhil237@gmail.com"
          />
          <SiLeetcode
            className="icons"
            onClick={() =>
              window.open("https://leetcode.com/kumarnikhil237/", "_blank")
            }
          />
        </div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default CommonConnectedIcons;
