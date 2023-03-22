import React from "react";
import Container from "./Components/ComponentComposition/Container";
import FillteredList from "./Components/useMemo/useMemo";
// import { Counter } from "./Components/Counter/Counter";
// import { InteractiveWelcome } from "./Components/Welcome/InteractiveWelcome";
// import { ClickTracker } from "./Components/Counter/ClickTracker";
// import ToDoList from "./Components/List/ToDoList";
// import { Welcome } from "./Components/Welcome/Welcome";
// import LanguageContext from "./Components/Context/LanguageContext";
// import DisplayLanguage from "./Components/Context/DisplayLanguage";
// import Sum from "./Components/Welcome/Sum";
// import GithubUser from "./Components/GithubUser/GithubUser";
// import GithubUserList from "./Components/GithubUser/GithubUserList";

export default function App(props) {
  // const [language, setLanguage] =
  //   useState("en");
  // const handleLanguage = (e) => {
  //   setLanguage(e.target.value);
  // };

  // const numbers = [1, 2, 3, 4];

  const habibis = [
    {
      id: 1,
      name: "Karam",
      age: 23,
    },
    {
      id: 2,
      name: "Adil",
      age: 23,
    },
    {
      id: 3,
      name: "Koray",
      age: 35,
    },
    {
      id: 4,
      name: "Hakan",
      age: 25,
    },
    {
      id: 5,
      name: "Gabriel",
      age: 25,
    },
    {
      id: 6,
      name: "Rasam",
      age: 23,
    },
    {
      id: 6,
      name: "Imaginary Guy",
      age: 16,
    },
  ];
  return (
    <Container title="My Awful App">
      <FillteredList list={habibis} />
      {/* <GithubUserList /> */}
      {/* <Counter counterStart={25} /> */}
    </Container>
  );
}

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
