import React from "react";

// That's enough Class based components for me, I'm going back to lovely Function based components. Thank you

// Modify the Colors component so that items is expected to be an array of objects each containing an 
// id and a name property. Render the name property of each object within a li tag, and use the id as a key.

export default function Colors(props) {
  console.log(props);
  return (
    <ul>
      {props.colors.map((color) => {
        return <li key={color.id}>{color.name}</li>;
      })}
    </ul>
  );
}
