import React from "react";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";
import { ClickTracker } from "./ClickTracker";
export class App extends React.Component {
  render() {
    return (
      <>
        <Welcome name={this.props.name} age={this.props.age} />
        <Counter counterStart={25} />
        <ClickTracker />
      </>
    );
  }
}
