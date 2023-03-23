import React from "react";
import Container from "./Components/ComponentComposition/Container";
import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import { Counter } from "./Components/Counter/Counter";
import GithubUser from "./Components/GithubUser/GithubUser";

export default function App(props) {
  // Add three Links within the main App component and use them to navigate to all three routes.

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
        <Route
          path="/users/:username"
          element={<GithubUser username={"KaramGuliyev"} />}
        />
      </Routes>
      <br />
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/counter"}>Counter</Link>
      <br />
      <Link to={"/users/KaramGuliyev"}>Habibi's Github</Link>
      <br />
    </Container>
  );
}
