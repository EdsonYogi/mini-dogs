import createAsyncSlice from "./helpers/createAsyncSlice";
import { TOKEN_POST, USER_GET } from "../services/api";
import { combineReducers } from "@reduxjs/toolkit";
import getLocalStorage from "./helpers/getLocalStorage";

const token = createAsyncSlice({
  name: "token",
  initialState: {
    data: getLocalStorage("token", null),
  },
  reducers: {
    fetchSuccess: {
      reducer: (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      prepare(payload) {
        return {
          payload: payload,
          meta: {
            localStorage: {
              key: "token",
              value: payload.token,
            },
          },
        };
      },
    },
    removeToken(state) {
      state.data = null;
    },
  },
  fetchConfig: (payload) => TOKEN_POST(payload),
});

const user = createAsyncSlice({
  name: "user",
  fetchConfig: (payload) => USER_GET(payload),
  reducers: {
    removeUser(state) {
      state.data = null;
    },
  },
});

const fetchToken = token.asyncAction;
const fetchUser = user.asyncAction;
const { removeToken } = token.actions;
const { removeUser } = user.actions;

export const login = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user));
    if (payload.token !== undefined) await dispatch(fetchUser(payload.token));
  } catch (error) {}
};

export const autoLogin = () => async (dispatch) => {
  const token = getLocalStorage("token", null);
  if (token) await dispatch(fetchUser(token));
};

export const logout = () => (dispatch) => {
  dispatch(removeToken());
  dispatch(removeUser());
  window.localStorage.removeItem("token");
};

const reducer = combineReducers({
  user: user.reducer,
  token: token.reducer,
});

export default reducer;
