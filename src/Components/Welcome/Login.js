import React, { Component } from "react";

// Add a "login" button to the Login component.
// This button should be disabled as long as the username and password inputs are empty.
// When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, passing it the state.

export class Login extends Component {
  state = {
    userName: "",
    password: "",
    remember: false,
    button: true,
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
      button:
        this.state.userName &&
        this.state.password === ""
          ? true
          : false,
    });
  };
  clearForm() {
    this.setState({
      userName: "",
      password: "",
      remember: false,
      button: true,
    });
  }

  render() {
    return (
      <>
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
        <button
          type="submit"
          name="button"
          disabled={this.state.button}
          onClick={() => {
            this.props.handleSubmit(this.state);
            this.clearForm();
          }}
        >
          Login
        </button>
      </>
    );
  }
}
Login.defaultValues = {
  type: "input",
};
