// Create a custom hook useCounter that keeps track of the state of a counter, and returns the current value of the counter as well as three functions to increment,
// decrement and reset the counter.

import { useCallback, useState } from "react";

export default function useCounter(initalValue = 0) {
  const [count, setCount] = useState(initalValue);

  const handleInc = useCallback(function handleInc() {
    setCount((count) => count + 1);
  }, []);
  const handleDec = useCallback(function handleDec() {
    setCount((count) => count - 1);
  }, []);
  const handleReset = useCallback(
    function handleReset() {
      setCount(initalValue);
    },
    [initalValue]
  );
  return {
    count: count,
    onIncrement: handleInc,
    onDecrement: handleDec,
    onReset: handleReset,
  };
}
