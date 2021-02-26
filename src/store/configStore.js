import { combineReducers, configureStore } from "@reduxjs/toolkit";
import login from "./login";
import photos from "./photos";

const reducer = combineReducers({ login, photos });
const store = configureStore({ reducer });

export default store;
