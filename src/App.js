import React, { useState } from "react";
import { Counter } from "./Components/Counter/Counter";
import { InteractiveWelcome } from "./Components/Welcome/InteractiveWelcome";
import { ClickTracker } from "./Components/Counter/ClickTracker";
import ToDoList from "./Components/List/ToDoList";
// import { Welcome } from "./Components/Welcome/Welcome";
import Container from "./Components/ComponentComposition/Container";
import LanguageContext from "./Components/Context/LanguageContext";
import DisplayLanguage from "./Components/Context/DisplayLanguage";

export default function App(props) {
  const [language, setLanguage] =
    useState("en");
  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <Container title="My Awful App">
      <InteractiveWelcome
        className="welcome"
        name={props.name}
        age={props.age}
      />
      <Counter counterStart={25} />
      <ClickTracker />
      <select
        value={language}
        onChange={handleLanguage}
      >
        <option value="en">EN</option>
        <option value="az">TR</option>
        <option value="it">IT</option>
      </select>
      <LanguageContext.Provider
        value={language}
      >
        <DisplayLanguage />
      </LanguageContext.Provider>
    </Container>
  );
}
