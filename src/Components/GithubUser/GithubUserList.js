import React, { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUserList() {
  const [userName, setUserName] = useState([
    "KaramGuliyev",
    "kry23",
    "AdilSadigov",
    "hakantuncer",
    "gabrielkryemadhi",
    "cyberRasam",
  ]);
  const [input, setInput] = useState("");

  const addUser = () => {
    setUserName(() => {
      return [...userName, input];
    });
    setInput("");
  };

  return (
    <div>
      <input
        onChange={(e) =>
          setInput(e.target.value)
        }
        value={input}
      />
      <button onClick={addUser}>Send</button>
      {userName.map((user, index) => {
        return (
          <GithubUser
            key={index}
            username={user}
          />
        );
      })}
    </div>
  );
}

