import React, { useState } from "react";
import { Counter } from "./Components/Counter/Counter";
import { InteractiveWelcome } from "./Components/Welcome/InteractiveWelcome";
import { ClickTracker } from "./Components/Counter/ClickTracker";
import ToDoList from "./Components/List/ToDoList";
// import { Welcome } from "./Components/Welcome/Welcome";
import Container from "./Components/ComponentComposition/Container";
import LanguageContext from "./Components/Context/LanguageContext";
import DisplayLanguage from "./Components/Context/DisplayLanguage";
import Sum from "./Components/Welcome/Sum";
import GithubUser from "./Components/GithubUser/GithubUser";
import GithubUserList from "./Components/GithubUser/GithubUserList";
import UserForm from "./Components/UserForm/UserForm";

export default function App(props) {
  const [language, setLanguage] = useState("en");
  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const numbers = [1, 2, 3, 4];
  return (
    <Container title="My Awful App">
      <UserForm />
    </Container>
  );
}

// <GithubUserList />
//<Counter counterStart={25} />
// <Sum/>
//       <InteractiveWelcome
//         className="welcome"
//         name={props.name}
//         age={props.age}
//       />
//       <Counter counterStart={25} />
//       <ClickTracker />
//       <select
//         value={language}
//         onChange={handleLanguage}
//       >
//         <option value="en">EN</option>
//         <option value="az">TR</option>
//         <option value="it">IT</option>
//       </select>
//       <LanguageContext.Provider
//         value={language}
//       >
//         <DisplayLanguage />
//       </LanguageContext.Provider>
