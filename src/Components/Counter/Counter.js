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

  return (
    <>
      <CounterDisplay
        style={myStyle}
        state={count}
      />
      <ClickCounter
        state={count}
        handler={handler}
      />
    </>
  );
}
