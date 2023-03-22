import React, { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUseWrapper() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <GithubUser username={username} />
    </div>
  );
}
