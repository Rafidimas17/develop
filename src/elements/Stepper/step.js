import React from "react";

export default function Step(props) {
  return (
    <div
      className={"stepBlock" + (props.selected ? " selected" : "")}
      style={{ textAlign: "center" }}
    >
      <div
        style={{ textAlign: "center" }}
        className="circleWrapper"
        onClick={() => props.updateStep(props.index + 1)}
      >
        <div className="circle">{props.index + 1}</div>
      </div>
      <span
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 10,
          fontFamily: "Poppins",
        }}
      >
        {props.label}
      </span>
    </div>
  );
}
