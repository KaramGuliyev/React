import React from "react";
import Container from "./Components/ComponentComposition/Container";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";

export default function App(props) {
  // Create an App component that wraps a Routes component and add a single Route to the / path that renders the Welcome component from
  // Function Components 01, passing it a name prop. Render the App component within a BrowserRouter component.

  return (
    <Container title="My Awful App">
      <Routes>
        <Route path="/" element={<Welcome name={"Habibi"} age={35} />} />
      </Routes>
    </Container>
  );
}
