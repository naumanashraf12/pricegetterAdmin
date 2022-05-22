import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "./api";

const initialState = {
  loading: false,
  user: {},
  error: null,
  isAuth: false,
  token: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    requestlogin(state, action) {
      state.loading = true;
    },
    getlogin(state, action) {
      state.user = action.payload.data.user;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    errorlogin(state, action) {
      state.error = action.payload;
    },
    clearErrors(state, action) {
      state.error = null;
    },
    logout(state, action) {
      localStorage.removeItem("token");
      return {};
    },
  },
});
export const { requestlogin, getlogin, errorlogin, clearErrors, logout } =
  authSlice.actions;
export function Logins({ password, email }) {
  return async function loginThunk(dispatch, getstate) {
    try {
      dispatch(requestlogin());
      const { data } = await postLogin(email, password);
      localStorage.setItem("token", data.token);
      dispatch(getlogin(data));
    } catch (error) {
      dispatch(errorlogin(error.response.data.message));
    }
  };
}
export default authSlice.reducer;
