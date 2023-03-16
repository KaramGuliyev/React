// Modify the Counter component so that the initial value of the counter, 
// the increment interval and the increment amount are passed as props to the component.

import React from "react";

export class Counter extends React.Component {
  state = { count: this.props.counterStart ?? 10 };
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState((state) => {
        console.log(state);
        return { count: state.count + 2 };
      });
    }, 2000);
  }
  render() {
    return <h1>Counter : {this.state.count}</h1>;
  }
}
