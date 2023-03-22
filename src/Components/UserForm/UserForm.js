import React from "react";
import useUserLogin from "../../CustomHooks/useUserLogin";

export default function UserForm() {
  const { username, password, setUsername, setPassword } =
    useUserLogin();
  return (
    <div>
      <input onChange={setUsername} value={username} />
      <input onChange={setPassword} value={password} />
      {console.log(`Your username is ${username} and you can use your password which is ${password} to login.`)}
    </div>
  );
}
