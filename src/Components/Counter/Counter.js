import React, { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
import { ClickCounter } from "./ClickCounter";

export function Counter(props) {
  const [count, setCount] = useState(0);

  function handler() {
    setCount(count + 1);
  }

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
        handler={handler}
        count={count}
        onCounterChange={handleCounterChange}
      />
    </>
  );
}
