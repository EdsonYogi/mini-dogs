import React, { useState, useEffect } from "react";
import { Content, Title } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import Photo from "../components/Photo";
import { login } from "../store/login";
import { fetchPhotos } from "../store/photos";

const Main = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (state.login.user.data) {
      dispatch(fetchPhotos());
    }
  }, [state.login.user.data]);

  const content = () => {
    if (
      state.login.token.loading ||
      state.login.user.loading ||
      state.photos.loading
    ) {
      return <p>Loading....</p>;
    }

    if (!state.login.user.data) {
      return (
        <LoginForm
          onSubmit={handleSubmit}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      );
    }

    if (state.login.user.data) {
      if (state.photos.data) {
        return (
          <ul>
            {state.photos.data.map(({ id, src, title, acessos }) => {
              return <Photo key={id} src={src} name={title} views={acessos} />;
            })}
          </ul>
        );
      }
    }

    return null;
  };

  return (
    <Content>
      <Title>
        <FontAwesomeIcon icon="paw" /> Mini Dogs
      </Title>
      {content()}
    </Content>
  );
};

export default Main;
