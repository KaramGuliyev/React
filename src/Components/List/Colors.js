import React from "react";

// That's enough Class based components for me, I'm going back to lovely Function based components. Thank you

// Create a Colors component that renders a ul tag with a li tag for each color passed in the items prop.
// The items prop should be an array of strings.

export default function Colors(props) {
  console.log(props);
  return (
    <ul>
      {props.colors.map((color, index) => {
        return <li key={index}>{color}</li>;
      })}
    </ul>
  );
}
