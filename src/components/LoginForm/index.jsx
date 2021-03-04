import React from "react";
import Button from "../Button";
import { Login, Username, Password } from "./style";

const LoginForm = ({ onSubmit, setUsername, setPassword }) => {
  return (
    <Login>
      <form onSubmit={onSubmit}>
        <Username>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </Username>
        <Password>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </Password>
        <Button className="login" title="Login" type="submit" text="Login" />
      </form>
    </Login>
  );
};

export default LoginForm;
