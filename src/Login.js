import React, { Component } from "react";

// Create a Login component containing three inputs: a username input, a password input and a remember checkbox.
// All three inputs should be controlled components.

export class Login extends Component {
  state = {
    userName: "",
    password: "",
    remember: false,
  };

  handleChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    let type = e.target.type;
    let checked = e.target.checked;

    this.setState({
      [name]:
        type === "checkbox" ? checked : value,
    });
  };

  render() {
    return (
      <>
        <h1>Flower Form</h1>
        <input
          name="userName"
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <input
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleChange}
        />
      </>
    );
  }
}
Login.defaultValues = {
  type: "input",
  value: "a",
};
