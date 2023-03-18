import React, { Component } from "react";

export class Lists extends Component {
  render() {
    const items = this.props.names.map(
      (name) => <li>{name}</li>
    );
    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default Lists;
