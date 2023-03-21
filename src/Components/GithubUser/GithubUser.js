import React, {
  useEffect,
  useState,
} from "react";

function GithubUser() {
  const [data, setData] = useState(null);
  const [userName, setUsername] = useState("");
  useEffect(() => {
    fetch(
      `https://api.github.com/users/${userName}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  }, [userName]);
  return (
    <div>
      <input
        value={userName}
        onChange={(e) =>
          setUsername(e.target.value)
        }
        placeholder="What is your github name?"
      />
      <div>
        <div>
          <div>
            {data ? (
              <h1>{data.login}</h1>
            ) : (
              "Habibi I asked your name!"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubUser;
