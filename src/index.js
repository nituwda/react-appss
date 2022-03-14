import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import logo from "./logo.svg";
import About from "./About";
import LandingPage from "./LandingPage";
import Education from "./Education";
import Certs from "./Certs";
import Projects from "./projects";

function Header() {
  return (
    <nav>
      <img src={logo} className="logo" alt="logo" />
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#certs">Certificates and Skills</a>
        </li>
        <li>
          <a href="#projs">Projects</a>
        </li>
      </ul>
    </nav>
  );
}

function Page() {
  return (
    <div>
      <div className="first-part">
        <Header />
        <LandingPage />
      </div>
      <div className="second" id="about">
        <About />
      </div>
      <div className="second" id="education">
        <h1 className="title"> Education </h1>
        <hr align="center" />
        <Education
          yearStart="2018"
          yearEnd="present"
          level="College"
          program="Bachelor of Science in Information Technology"
          major="Web and Mobile Application Development"
          school="University of Santo Tomas"
        />
        <Education
          yearStart="2016"
          yearEnd="2018"
          level="Senior High School"
          program="Science, Technology, Engineering and Mathematics Strand"
          school="Claret School of Quezon City"
        />
      </div>
      <div className="second" id="certs">
        <Certs />
      </div>
      <div className="second" id="projs">
        <h1 className="title"> Projects </h1>
        <hr align="center" />
        <div className="projects">
          <Projects
            name="CONTENT MANAGEMENT SYSTEM and TRANSACTION PROCESSING SERVICE for Juliet Mnl PH"
            client="Juliet Mnl PH"
            position="Frontend Developer"
          />
          <Projects
            name="iCheckIt: A Web and Mobile Checklist and Notification System for Semestral and Annual Tasks under The College of Information and Computing Sciences"
            client="CICS Faculty"
            position="Frontend Developer"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

ReactDOM.render(<Page />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
