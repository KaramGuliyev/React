import React, {
  Component,
  createRef,
} from "react";

export class UncontrolledLogin extends Component {
  _formRef = createRef();
  _buttonRef = createRef();
  _focusRef = createRef();
  handleSubmit = (e) => {
    e.preventDefault();
    const formRef =
      this._formRef.current.elements;

    const username = formRef.username.value;
    const password = formRef.password.value;
    const remember = formRef.remember.checked;

    console.log({
      username,
      password,
      remember,
    });
  };

  handleFormPrefill = () => {
    const formRef =
      this._formRef.current.elements;
    formRef.username.value = "Adrian";
    formRef.password.value = "Antochi";
    formRef.remember.checked = true;
  };

  handleChange = (e) => {
    const formRef =
      this._formRef.current.elements;
    const buttonRef = this._buttonRef.current;
    e.preventDefault();
    const username = formRef.username.value;
    const password = formRef.password.value;
    const remember = formRef.remember.checked;

    if (
      username === "" ||
      password === "" ||
      remember === false
    ) {
      buttonRef.disabled = true;
    } else {
      buttonRef.disabled = false;
    }
  };

  componentDidMount = () => {
    const focusInput =
      this._formRef.current.elements.username;
    focusInput.focus();
  };

  // My browser doesn't support those features even so, I did all the ways I know.

  render() {
    return (
      <>
        <h3>My Uncontrolled From</h3>
        <form
          onSubmit={this.handleSubmit}
          ref={this._formRef}
        >
          <input
            name="username"
            onChange={this.handleChange}
            autofocus
            ref={this._focusRef}
          />
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
          />
          <input
            name="remember"
            type="checkbox"
            onChange={this.handleChange}
          />

          <button
            type="submit"
            ref={this._buttonRef}
            disabled
          >
            Login
          </button>
          <button type="reset">Reset</button>
          <button
            type="button"
            onClick={this.handleFormPrefill}
          >
            Prefill
          </button>
        </form>
      </>
    );
  }
}

export default UncontrolledLogin;
