import React, {
  Component,
  useState,
} from "react";

// Rewrite the Login component from Forms 03 as a function component, and use the useState hook to track the state of the username, password and remember inputs.
// Tip: you can use useState more than once.

export function Login(props) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] =
    useState(false);
  const [button, setButton] = useState(true);
  const [styleClass, setStyleClass] =
    useState("red");

  function clearForm() {
    setUsername("");
    setPassword("");
    setRemember(false);
    setButton(true);
    setStyleClass("red");
  }

  return (
    <>
      <input
        name="userName"
        value={userName}
        onChange={(e) => {
          setUsername(e.target.value);
          setButton(
            userName === "" || password === ""
              ? true
              : false
          );
        }}
      />
      <input
        name="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setButton(
            userName === "" || password === "" || password.length < 8
              ? true
              : false
          );
          setStyleClass(
            password.length < 8
              ? "red"
              : "green"
          );
        }}
      />
      <input
        name="remember"
        type="checkbox"
        checked={remember}
        onChange={(e) => {
          setRemember(e.target.checked);
        }}
      />
      <button
        type="submit"
        name="button"
        className={styleClass}
        color="black"
        disabled={button}
        onChange={(e) => {}}
        onClick={() => {
          props.handleSubmit({
            userName,
            password,
            remember,
            button,
            styleClass,
          });
          clearForm();
        }}
      >
        Login
      </button>
    </>
  );
}

Login.defaultValues = {
  type: "input",
};
