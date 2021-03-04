import React, { useState, useEffect, Fragment } from "react";
import { Container, Content, Header } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import Photo from "../components/Photo";
import Button from "../components/Button";
import Loading from "../components/Loading";
import { login, autoLogin, logout } from "../store/login";
import { fetchPhotos } from "../store/photos";

const Main = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ username, password }));
  };

  const handleLoadPhotos = () => {
    if (!state.photos.loading) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  useEffect(() => {
    if (state.login.user.data) {
      dispatch(fetchPhotos(page));
    }
  }, [state.login.user.data, page, dispatch]);

  useEffect(() => {
    if (state.photos.data) {
      const newPhotos = [...state.photos.data];
      setPhotos([...photos, newPhotos]);
    }
  }, [state.photos.data]);

  return (
    <Container>
      <Header>
        <h1>
          <FontAwesomeIcon icon="paw" /> Mini Dogs
        </h1>
        {state.login.user.data && (
          <div className="user">
            <span>{state.login.user.data.username}</span>
            <Button
              className="logout"
              title="Logout"
              text={<FontAwesomeIcon icon="sign-out-alt" />}
              type="button"
              onClick={() => dispatch(logout())}
            />
          </div>
        )}
      </Header>
      <Content>
        {state.login.user.loading ||
        state.login.token.loading ||
        state.photos.loading ? (
          <Loading />
        ) : (
          ""
        )}
        {!state.login.user.data ? (
          <Fragment>
            {state.login.token.loading && <p>Loading...</p>}
            <LoginForm
              onSubmit={handleSubmit}
              setUsername={setUsername}
              setPassword={setPassword}
              username={username}
              password={password}
            />
          </Fragment>
        ) : (
          state.photos.data && (
            <ul>
              {photos.map((photo) => {
                return photo.map(({ id, src, title, acessos }) => {
                  return (
                    <Photo key={id} src={src} name={title} views={acessos} />
                  );
                });
              })}
            </ul>
          )
        )}

        {state.login.user.data && state.photos.data
          ? state.photos.data.length > 0 && (
              <Button
                className="plus"
                title="Load More Photos"
                text={<FontAwesomeIcon icon="plus" />}
                type="button"
                onClick={() => handleLoadPhotos()}
              />
            )
          : null}
      </Content>
    </Container>
  );
};

export default Main;
