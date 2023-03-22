import { useState, useEffect } from "react";

const useGithubUser = (username) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fectUserData = (username) => {
    if (username) {
      setLoading(true);
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
          if (response.status === 403) {
            setError(new Error("You made too many requests!"))
          } else if(!response.ok) {
            setError("Something is up.")
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setUser(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setUser(null);
          setError(error);
          setLoading(false);
        });
    }
  };
  return { user, loading, error, fectUserData };
};

export default useGithubUser;
