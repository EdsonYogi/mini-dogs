import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import { login } from "./store/login";

function App() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <div className="App">
      <LoginForm
        onSubmit={handleSubmit}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    </div>
  );
}

export default App;
