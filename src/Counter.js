// Extract the h1 tag showing the count state variable into a new component called
// CounterDisplay and render it within the Counter component,
// passing it the count state variable as a prop.

import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = { count: this.props.counterStart ?? 10 };
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState((state) => {
        console.log(state.count);
        return { count: state.count + 2 };
      });
    }, 2000);
  }
  render() {
    return <CounterDisplay state={this.state.count} />;
  }
}
