import React from "react";
import GithubUser from "./GithubUser";

function ShowGithubUser({ user }) {
  return (
    <div>
      <GithubUser username={user} />
    </div>
  );
}

export default ShowGithubUser;
