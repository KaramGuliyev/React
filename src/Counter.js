import { clear } from "@testing-library/user-event/dist/clear";
import React, {
  useEffect,
  useState,
} from "react";

// Rewrite the Counter component from State 1 as a function component and add a side effect that initializes the interval as soon as the component renders,
// and clears it when the component unmounts.

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  });

  return <h1>Counter : {count}</h1>;
}
