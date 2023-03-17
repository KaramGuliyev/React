import React from "react";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { ClickTracker } from "./ClickTracker";
export class App extends React.Component {
  render() {
    return (
      <>
        <InteractiveWelcome name={this.props.name} age={this.props.age} />
        <Counter counterStart={25} />
        <ClickTracker />
      </>
    );
  }
}
