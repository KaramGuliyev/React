import React from "react";
import Container from "./Components/ComponentComposition/Container";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import { Counter } from "./Components/Counter/Counter";

export default function App(props) {
  // Add a new Route to the /counter path that renders the Counter component from useState 01.
  return (
    <Container title="My Awful App">
      <Routes>
        <Route path="/" element={<Welcome name={"Habibi"} age={35} />} />
        <Route path="/counter" element={<Counter count={35} />} />
      </Routes>
    </Container>
  );
}
