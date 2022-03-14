import React from "react";
import "./About.css";
import picture from "./picture.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";

function About() {
  return (
    <div>
      <h2 className="title"> About </h2>
      <hr align="center" />
      <div className="second-part">
        <div className="about">
          <p>
            Hello there! I'm Hans Patrick Nituda, an aspiring web developer and
            a UI/UX designer.
          </p>
          <p>
            I'm currently studying as a senior student at the University of
            Santo Tomas, taking up Information Technology, specializing in Web
            and Mobile Development. I like reading mangas, watching anime and
            exercising.
          </p>
          <p>
            <FaBirthdayCake className="about-icon" />
            <b>Age:</b> 22
          </p>
          <p>
            <MdEmail className="about-icon" />
            <b>Email:</b> h.patricknituda@gmail.com
          </p>
          <p>
            <FaAddressCard className="about-icon" />
            <b>Address:</b> #18 San Isidro Street, San Pedro 2 and 3, Tandang
            Sora, QC
          </p>
          <p>
            <FaPhoneAlt className="about-icon" />
            <b>Phone:</b> +63 912 345 6789
          </p>
        </div>
        <div className="personal-info">
          <img src={picture} className="picture" />
        </div>
      </div>
    </div>
  );
}

export default About;
