import React, { useEffect } from "react";
import { Button } from "../Button";

export function ClickCounter({
  count,
  onCounterChange,
  handler,
}) {
  useEffect(() => {
    onCounterChange(count)
    return () => {
    };
  }, [count, onCounterChange]);

  return (
    <>
      <Button handler={handler} innerText="+" />
    </>
  );
}
