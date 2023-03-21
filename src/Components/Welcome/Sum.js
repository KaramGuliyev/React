import React from "react";

// What happens if the numbers prop of the Sum component is not set? How can you set a default value for this prop?
// It throws an undef error, I can set def values easily by this

export default function Sum({ numbers }) {
  let defaultValues = numbers
    ? numbers
    : [1, 2, 3, 4, 5];
  const sum = defaultValues.reduce(
    (a, b) => a + b
  );
  return <h1> Number {sum}! Amazing!</h1>;
}
