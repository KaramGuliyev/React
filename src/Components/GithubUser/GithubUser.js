import React from "react";
import useGithubUser from "./useGithubUser";

export default function GithubUser({ username }) {
  const { user, isLoading } = useGithubUser(username);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return (
      <div>
        <img src={user.avatar_url} alt={user.id} />
        <h2>{user.login}</h2>
      </div>
    );
  }
}
