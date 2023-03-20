import React from "react";
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

// Consume the LanguageContext within the DisplayLanguage component by using the context consumer, and show the selected language in an h1 tag.

function DisplayLanguage() {
  return (
    <div>
      <LanguageContext.Consumer>
        {(language) => (
          <div>
            <p>
              {Strings[language].helloMsg}
              Habibi!
            </p>
            <p>
              Habibi it's{" "}
              {Strings[language].language}{" "}
              Language!
            </p>
          </div>
        )}
      </LanguageContext.Consumer>
    </div>
  );
}

export default DisplayLanguage;
