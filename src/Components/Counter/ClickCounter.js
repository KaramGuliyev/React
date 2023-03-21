import React from "react";
import { Button } from "../Button";

export function ClickCounter(props) {
  return (
    <>
      <Button
        handler={props.handler}
        innerText="+"
      />
    </>
  );
}
