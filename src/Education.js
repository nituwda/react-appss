import React from "react";
import "./Education.css";

export default function College(props) {
  return (
    <div>
      <div className="educ">
        <h2>
          {" "}
          {props.yearStart} - {props.yearEnd}{" "}
        </h2>
        <b>
          <p> {props.level} </p>
        </b>
        <b> {props.program} </b>
        <em>
          <p> {props.major} </p>
        </em>
        <p> {props.school} </p>
      </div>
    </div>
  );
}
