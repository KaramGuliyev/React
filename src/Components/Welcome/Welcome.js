import React from "react";
import { Age } from "./Age";
export default function Welcome(props) {
    const nameVal =
      props.name.props.children;
    return (
      <div className={props.className}>
        {props.age === undefined ||
        Number(props.age) === 0 ||
        !props.age ? (
          ""
        ) : props.age > 18 &&
          props.age < 65 &&
          nameVal === "John" ? (
          <h1>Welcome {props.name}!</h1>
        ) : (
          <h1>
            Sorry {props.name}... you are
            not allowed here...
          </h1>
        )}
        <Age age={props.age} />
      </div>
    );
}

Welcome.defaultProps = {
  name: "Habibi",
  age: 25,
};
