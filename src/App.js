import React from "react";
import Container from "./Components/ComponentComposition/Container";
import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import { Counter } from "./Components/Counter/Counter";
import GithubUser from "./Components/GithubUser/GithubUser";
import NotFound from "./Components/NotFound/NotFound.js";
import GithubUserList from "./Components/GithubUser/GithubUserList";

export default function App(props) {
  // Add a Route to the users path that shows the GihubUserList component from useEffect 04.
  // Modify it so that instead of showing the GithubUser component for each username entered,
  // it shows a link to a nested route that shows the ShowGithubUser component. In doing so, remove the
  // /users/:username route from the App component, and add a new nested route within the /users route.

  return (
    <Container title="My Awful App">
      <Routes>
        <Route
          path="/"
          element={<Welcome name={"Habibi"} age={35} />}
        />
        <Route
          path="/counter"
          element={<Counter count={35} />}
        />
        <Route path="/users" element={<GithubUserList />}>
          <Route
            index
            element={<p><strong>Add a user or select it from amazing people list</strong></p>}
          />
          <Route path=":username" element={<GithubUser />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <br />
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/counter"}>Counter</Link>
      <br />
      <Link to={"/users/"}>Habibi's Github</Link>
      <br />
    </Container>
  );
}
