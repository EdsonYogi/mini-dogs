import React from "react";
import Main from "./main/";
import GlobalStyle from "./GlobalStyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faPaw } from "@fortawesome/free-solid-svg-icons";

library.add(faEye, faPaw);

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>
  );
}

export default App;
