import React from "react";
import { Button } from "../Button";

export class ClickCounter extends React.Component {

  render() {
    return (
      <>
        <Button handler={this.props.handler} innerText="+" />
      </>
    );
  }
}
