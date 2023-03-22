import React, { useEffect } from "react";
import { Button } from "../Button";

export function ClickCounter({
  count,
  onCounterChange,
  handleInc,
  handleDec,
  handleReset,
}) {
  useEffect(() => {
    onCounterChange(count);
    return () => {};
  }, [count, onCounterChange]);

  return (
    <>
      <Button handler={handleInc} innerText="+" />
      <Button handler={handleDec} innerText="-" />
      <Button handler={handleReset} innerText="Reset" />
    </>
  );
}
