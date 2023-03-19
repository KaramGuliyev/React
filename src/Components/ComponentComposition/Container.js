import React from "react";

// Modify the Container component so that it can display a title received within the title prop.

export default function Container(props) {
  return (
    <div className="redBorder whiteBackground">
      <div className="whiteBackground">
        <h2>{props.title}</h2>
        <div>{props.children}</div>
      </div>
    </div>
  );
}
