import React from "react";

export function Button(props) {
  return (
    <button
      onClick={props.handler}
      className={props.class}
      id={props.id ?? ""}
    >
      {props.innerText}
    </button>
  );
}
