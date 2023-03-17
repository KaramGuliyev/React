import React from "react";
import { Button } from "./Button";

export class ClickCounter extends React.Component {
  state = this.props.state;

  render() {
    return (
      <>
        <Button handler={this.props.handler} type="+" />
      </>
    );
  }
}
