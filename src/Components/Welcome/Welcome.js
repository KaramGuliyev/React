import React from "react";
import { Age } from "./Age";

// Create an App component that wraps a Routes component and add a single Route to the / path that renders the Welcome component from
// Function Components 01, passing it a name prop. Render the App component within a BrowserRouter component.

export default function Welcome(props) {
  console.log(props);
  return (
    <div className={props.className}>
      {props.age === undefined ||
      Number(props.age) === 0 ||
      !props.age ? (
        ""
      ) : props.age > 18 && props.age < 65 ? (
        <h1>Welcome {props.name}!</h1>
      ) : (
        <h1>
          Sorry {props.name}... you are not allowed here...
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
