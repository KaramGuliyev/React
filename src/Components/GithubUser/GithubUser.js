// Modify the useGithubUser hook to return the function to fetch the data of a Github user,
// along with the data of the user and the error and loading states.

import React, { useEffect } from "react";
import useGithubUser from "./useGithubUser";

export default function GithubUser({ username }) {
  const { user, loading, error, fectUserData } =
    useGithubUser();

  useEffect(() => {
    fectUserData(username);
  }, [username]);

  // console.log(error?.message);
  if (user) {
    return (
      <div style={{ marginTop: "2rem" }}>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {user && (
          <div>
            <img
              src={user.avatar_url}
              alt={user.login}
              width="50"
            />
            <h2>{user.login}</h2>
          </div>
        )}
      </div>
    );
  }
}
