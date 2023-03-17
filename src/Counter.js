import React from "react";
import { CounterDisplay } from "./CounterDisplay";
import { ClickCounter } from "./ClickCounter";

// Create a ClickTracker component that renders three buttons.
// Implement a single event handler for all three buttons,
// and track of which button was pressed last.
// Show the last button that was pressed in an h1 tag within the ClickTracker component.
// Tip: you can use the event object to access the target property of the event.

export class Counter extends React.Component {
  state = { count: this.props.counterStart ?? 0 };

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState((state, props) => {
      return { count: state.count + 1 };
    });
  }

  render() {
    return (
      <>
        <CounterDisplay state={this.state.count} />
        <ClickCounter state={this.state} handler={this.handler} />
      </>
    );
  }
}
