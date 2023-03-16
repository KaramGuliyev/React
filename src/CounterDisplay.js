// Extract the h1 tag showing the count state variable into a new component called
// CounterDisplay and render it within the Counter component,
// passing it the count state variable as a prop.

import React from "react";

export class CounterDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Counter : {this.props.state}</h1>;
  }
}
