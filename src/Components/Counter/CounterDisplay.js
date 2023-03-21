import React from "react";

export function CounterDisplay(props) {
  return (
    <>
      <h1 style={props.style}>
        Counter : {props.state}
      </h1>
    </>
  );
}
