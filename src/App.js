import React from "react";
import CarDetails from "./Components/CarDetails/CarDetails";
import Container from "./Components/ComponentComposition/Container";

export default function App(props) {
  const initialData = {
    model: "MB",
    year: 2014,
    color: "White-Black",
  };
  return (
    <Container title="My Awful App">
      <CarDetails initialData={initialData} />
    </Container>
  );
}
