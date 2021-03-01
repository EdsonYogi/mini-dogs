import React from "react";
import Main from "./main/";
import GlobalStyle from "./GlobalStyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faPaw, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faEye, faPaw, faSignOutAlt);

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>
  );
}

export default App;
