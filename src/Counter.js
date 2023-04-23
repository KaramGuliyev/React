// Not only the counterStart, but the amount to increment, and the interval should be passed as a prop. 
// You can initialize the state in either the constructor or when componentDidMount() function gets called. And take the amount that the count changes from props. 
// So if I want to increment it by 5, this should have to be possible from the Counter props.

import React from "react";

export class Counter extends React.Component {
  state = { count: this.props.counterStart ?? 10 };
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState((state) => {
        console.log(state);
        return { count: state.count + this.props.incrementAmount};
      });
    }, 2000);
  }
  render() {
    return <h1>Counter : {this.state.count}</h1>;
  }
}
