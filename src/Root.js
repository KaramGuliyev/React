import React from "react";
import Container from "./Components/ComponentComposition/Container";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import { Counter } from "./Components/Counter/Counter";
import GithubUser from "./Components/GithubUser/GithubUser";

export default function App(props) {
  // Add a new Route to the users/:username path that renders a ShowGithubUser component that receives the username as a path parameter and 
  // renders the GithubUser component from useEffect 03 by passing it the received username.
  
  return (
    <Container title="My Awful App">
      <Routes>
        <Route path="/" element={<Welcome name={"Habibi"} age={35} />} />
        <Route path="/counter" element={<Counter count={35} />} />
        <Route path="/users/:username" element={<GithubUser username={"KaramGuliyev"} />} />

      </Routes>
    </Container>
  );
}
