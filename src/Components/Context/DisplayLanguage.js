import React from "react";
import LanguageContext from "./LanguageContext";
const Strings = {
  en: {
    helloMsg: "Welcome, ",
  },
  az: {
    helloMsg: "Salam, ",
  },
  it: {
    helloMsg: "Benvenuto, ",
  },
};
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
          </div>
        )}
      </LanguageContext.Consumer>
    </div>
  );
}

export default DisplayLanguage;
