import { useState, useEffect } from "react";

const useGithubUser = (username) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (username) {
      setLoading(true);
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching GitHub user:", error);
          setLoading(false);
        });
    }
  }, [username]);

  return { user, loading };
};

export default useGithubUser;
