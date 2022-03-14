import React from "react";
import "./projects.css";

export default function Projects(props) {
  return (
    <div className="proj-settings">
      <h2>{props.name}</h2>
      <p>Client: {props.client}</p>
      <p>Position: {props.position}</p>
    </div>
  );
}
