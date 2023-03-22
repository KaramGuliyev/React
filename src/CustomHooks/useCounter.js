// Create a custom hook useCounter that keeps track of the state of a counter, and returns the current value of the counter as well as three functions to increment,
// decrement and reset the counter.

import { useState } from "react";

export default function useCounter(initalValue = 0) {
  const [count, setCount] = useState(initalValue);

  function handleInc() {
    setCount(count + 1);
  }
  function handleDec() {
    setCount(count - 1);
  }
  function handleReset() {
    setCount(initalValue);
  }
  return {
    count: count,
    onIncrement: handleInc,
    onDecrement: handleDec,
    onReset: handleReset,
  };
}
