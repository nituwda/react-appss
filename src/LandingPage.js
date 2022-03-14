import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="container">
      <span> Hans Patrick Nituda </span>
      <p> </p>
      <a href="https://twitter.com/hpln_">
        <FaTwitter className="icon-handles tw" />
      </a>
      <a href="https://www.instagram.com/ni.tuuda/">
        <FaInstagram className="icon-handles ig" />
      </a>
      <a href="https://www.linkedin.com/in/hpnituda/">
        <FaLinkedin className="icon-handles li" />
      </a>
    </div>
  );
}

export default LandingPage;
