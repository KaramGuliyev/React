import React from "react";

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.handler}>
        {this.props.type}
      </button>
    );
  }
}
