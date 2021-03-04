import React from "react";
import Main from "./main/";
import GlobalStyle from "./GlobalStyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEye,
  faPaw,
  faSignOutAlt,
  faPlus,
  faBone,
} from "@fortawesome/free-solid-svg-icons";

library.add(faEye, faPaw, faSignOutAlt, faPlus, faBone);

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Main icon="bone" />
    </div>
  );
}

export default App;
