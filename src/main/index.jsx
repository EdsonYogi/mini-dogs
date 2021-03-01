import React, { useState, useEffect, Fragment } from "react";
import { Content, Header } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import Photo from "../components/Photo";
import { login, logout } from "../store/login";
import { fetchPhotos } from "../store/photos";

const Main = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log(state);

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
    if (state.login.user.data) {
      dispatch(fetchPhotos(page));
    }
  }, [state.login.user.data, page]);

  useEffect(() => {
    if (state.photos.data) {
      const newPhotos = [...state.photos.data];
      setPhotos([...photos, newPhotos]);
    }
    return setPassword([]);
  }, [state.photos.data]);

  const content = () => {
    // if (
    //   state.login.token.loading ||
    //   state.login.user.loading ||
    //   state.photos.loading
    // ) {
    //   return <p>Loading....</p>;
    // }

    if (!state.login.user.data) {
      return (
        <Fragment>
          {state.login.token.loading && <p>Loading...</p>}
          <LoginForm
            onSubmit={handleSubmit}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        </Fragment>
      );
    }

    if (state.login.user.data) {
      if (state.photos.data) {
        return (
          <div>
            <ul>
              {photos.map((photo) => {
                return photo.map(({ id, src, title, acessos }) => {
                  return (
                    <Photo key={id} src={src} name={title} views={acessos} />
                  );
                });
              })}
            </ul>

            {state.photos.loading && <p>Loading...</p>}
            {state.photos.data.length > 0 ? (
              <button onClick={() => dispatch(logout())}>More Photos</button>
            ) : (
              <p>No more Photos</p>
            )}
          </div>
        );
      }
    }

    return null;
  };

  return (
    <Content>
      <Header>
        <h1>
          <FontAwesomeIcon icon="paw" /> Mini Dogs
        </h1>
        {state.login.user.data && (
          <button onClick={() => (state.login.user.data = null)}>
            <FontAwesomeIcon icon="sign-out-alt" />
          </button>
        )}
      </Header>
      {content()}
    </Content>
  );
};

export default Main;
