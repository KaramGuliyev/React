import React from "react";

export class CounterDisplay extends React.Component {
  render() {
    return (
      <>
        <h1 style={this.props.style}>Counter : {this.props.state}</h1>
      </>
    );
  }
}
