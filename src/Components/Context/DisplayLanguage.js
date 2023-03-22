import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";
const Strings = {
  en: {
    helloMsg: "Welcome, ",
    language: "English",
  },
  az: {
    helloMsg: "Salam, ",
    language: "Azerbaijan",
  },
  it: {
    helloMsg: "Benvenuto, ",
    language: "Italian",
  },
};

// Rewrite the DisplayLanguage component from Context 02 to be a function component, and access the LanguageContext through the useContext hook.

function DisplayLanguage() {
  const language = useContext(LanguageContext);
  return (
    <div>
      {
        <div>
          <p>
            {Strings[language].helloMsg}
            Habibi!
          </p>
          <p>
            Habibi it's {Strings[language].language} Language!
          </p>
        </div>
      }
    </div>
  );
}

export default DisplayLanguage;
