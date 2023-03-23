import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GithubUser() {
  const [data, setData] = useState(null);
  const { username } = useParams();
  const [userName, setUserName] = useState(username);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  }, [username]);
  return (
    <div>
      {data ? (
        <h1>{data.login}</h1>
      ) : (
        "Habibi I asked your name!"
      )}
    </div>
  );
}

export default GithubUser;
