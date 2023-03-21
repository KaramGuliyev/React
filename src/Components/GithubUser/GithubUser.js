//   Create a GithubUserList component that maintains an array of usernames, showing a GithubUser component for each username entered.
//   The usernames should be added to the array using an input field and a button.

import React, {
  useEffect,
  useState,
} from "react";

export default function GithubUser({
  username,
}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  }, [username]);
  return (
    <div>
      <div>{data && <h1>{data.login}</h1>}</div>
    </div>
  );
}
