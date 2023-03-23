import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import GithubUser from "./GithubUser";
import ShowGithubUser from "./ShowGithubUser";

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
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addUser}>Send</button>
      {userName.map((user, index) => {
        return (
          <Link to={user} key={index}>
            <br />
            <ShowGithubUser user={user} />
            <br />
          </Link>
        );
      })}
    </div>
  );
}
