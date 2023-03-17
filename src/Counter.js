// Modify the Counter component so that the interval is initialized within the
// componentDidMount life cycle method instead of the constructor.
// Is the constructor still required?

// I think no need for using constructor here

import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = { count: this.props.counterStart ?? 10 };

  componentDidMount() {
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
