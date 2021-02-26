import createAsyncSlice from "./createAsyncSlice";
import { TOKEN_POST, USER_GET } from "../services/api";
import { combineReducers } from "@reduxjs/toolkit";

const token = createAsyncSlice({
  name: "token",
  fetchConfig: (payload) => TOKEN_POST(payload),
});

const user = createAsyncSlice({
  name: "user",
  fetchConfig: (payload) => USER_GET(payload),
});

const fetchToken = token.asyncAction;
const fetchUser = user.asyncAction;

export const login = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user));
    if (payload.token !== undefined) await dispatch(fetchUser(payload.token));
  } catch (error) {}
};

const reducer = combineReducers({
  user: user.reducer,
  token: token.reducer,
});

export default reducer;
