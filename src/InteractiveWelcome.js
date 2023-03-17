import React, { Component } from "react";
import { Welcome } from "./Welcome";

// Create an InteractiveWelcome component that renders an input tag and the Welcome component.
// Pass the current content of the input tag to the name prop of the Welcome component.
// The input tag should be a controlled component.

export class InteractiveWelcome extends Component {
  state = {
    inputVal: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <>
        <input
          name="username"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Welcome
          name={this.props.name}
          age={this.props.age}
        />
      </>
    );
  }
}
