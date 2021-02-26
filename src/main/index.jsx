import React, { useState } from "react";
import { Content, Title } from "./style";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import { login } from "../store/login";

const Main = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ username, password }));
  };
  return (
    <Content>
      <Title>Mini Dogs</Title>
      <LoginForm
        onSubmit={handleSubmit}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    </Content>
  );
};

export default Main;
