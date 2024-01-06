import React from "react";
import "./contacts.css";
import CommonConnectedIcons from "../commonConnectedIcons";
import { FaPhone } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";

function Contacts() {
  return (
    <div className="contact-section">
      <div className="header-contact">
        <div className="bar-footer"></div>
        <div className="contact-text">CONTACT ME</div>
        <div className="bar-footer"></div>
      </div>
      <div className="content">
        <div className="box">
          <BiLogoGmail className="icon-field" size={25} />
          <div className="text-field">kumarnikhil237@gmail.com</div>
        </div>
        <div className="box">
          <FaPhone className="icon-field" />
          <div className="text-field">(+91)8210061715</div>
        </div>
        <div className="box">
          <MdLocationPin className="icon-field" size={25} />
          <div className="text-field">Pune, India</div>
        </div>
      </div>
      <div className="icon-section">
        <CommonConnectedIcons />
      </div>
    </div>
  );
}

export default Contacts;
