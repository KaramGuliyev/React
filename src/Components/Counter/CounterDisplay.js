import React from "react";

export function CounterDisplay({
  count,
  style,
}) {
  return (
    <>
      <h1 style={style}>Counter : {count}</h1>
    </>
  );
}
