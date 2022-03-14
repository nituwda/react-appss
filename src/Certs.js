import React from "react";
import "./Certs.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMicrosoftoffice } from "react-icons/si";

function Certs() {
  return (
    <div>
      <div>
        <h1 className="title"> Certificates and Skills </h1>
        <hr align="center" />
        <div className="certs-and-skills">
          <div className="certs">
            <ul>
              <li>
                IBM - Enterprise Design Thinking Practitioner <br />
                Issued: Feb 2022
              </li>
              <li>
                Coursera - HTML, CSS and JavaScript for Web Developers <br />
                Issued: Nov 2020
              </li>
              <li>
                PhilNits - PhilNits Examination Passer <br />
                Passed: Oct 2021
              </li>
            </ul>
          </div>
          <div className="skills">
            <FaHtml5 className="icon-handles" />
            <FaCss3 className="icon-handles" />
            <SiJavascript className="icon-handles" />
            <FaAngular className="icon-handles" />
            <FaPython className="icon-handles" />
            <SiMicrosoftoffice className="icon-handles" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certs;
