import React from "react";

// Write a Sum function component that receives a numbers prop (expected to be an array of numbers)
// and renders the sum of all numbers in the array within a h1 tag.

export default function Sum({ numbers }) {
  const sum = numbers.reduce((a, b) => a + b);
  return <h1> Number {sum}! Amazing!</h1>;
}
