import React, { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
import { ClickCounter } from "./ClickCounter";
import useCounter from "../../CustomHooks/useCounter";

export function Counter(props) {

  const { count, onIncrement, onDecrement, onReset } =
    useCounter(0);

  const myStyle = {
    backgroundColor: "lightgray",
  };

  function handleCounterChange(count) {
    console.log(`Habibi Counter : ${count}`);
  }

  // Add a side effect to the ClickCounter component from useState 01 that calls a onCounterChange
  // function with the current value of the counter every time value of the counter changes.
  // The function should be received as a prop.

  return (
    <>
      <CounterDisplay
        style={myStyle}
        count={count}
        onCounterChange={handleCounterChange}
      />
      <ClickCounter
        handleInc={onIncrement}
        handleDec={onDecrement}
        handleReset={onReset}
        count={count}
        onCounterChange={handleCounterChange}
      />
    </>
  );
}
