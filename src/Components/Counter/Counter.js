import React from "react";
import { CounterDisplay } from "./CounterDisplay";
import { ClickCounter } from "./ClickCounter";

export class Counter extends React.Component {
  state = {
    count: this.props.counterStart ?? 0,
  };

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  }

  render() {
    const myStyle = {
      backgroundColor: "lightgray",
    };
    return (
      <>
        <CounterDisplay
          style={myStyle}
          state={this.state.count}
        />
        <ClickCounter
          state={this.state}
          handler={this.handler}
        />
      </>
    );
  }
}
