import React, { Component } from "react";

export class Login extends Component {
  state = {
    userName: "",
    password: "",
    remember: false,
    button: true,
    class: "red",
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
        this.state.userName === "" &&
        this.state.password === ""
          ? true
          : false,
      class:
        this.state.password.length < 8
          ? "red"
          : "green",
    });

    if (this.state.password.length < 8) {
      console.log(true);
    }
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
          className={this.state.class}
          color="black"
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
