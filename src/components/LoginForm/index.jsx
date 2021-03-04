import React from "react";
import Button from "../Button";
import { Login, Username, Password } from "./style";

const LoginForm = ({
  onSubmit,
  setUsername,
  setPassword,
  username,
  password,
}) => {
  return (
    <Login>
      <form onSubmit={onSubmit}>
        <Username>
          <label htmlFor="username">Username</label>
          <input
            placeholder="dog"
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </Username>
        <Password>
          <label htmlFor="password">Password</label>
          <input
            placeholder="dog"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </Password>
        <p className="infoUser">
          Default <b>Username</b> and{" "}
          <b>
            Password: <b>dog</b>
          </b>
        </p>
        <Button className="login" title="Login" type="submit" text="Login" />
      </form>
    </Login>
  );
};

export default LoginForm;
