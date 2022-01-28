import axios from "axios";
import api, { API_URL } from "../api/userAPI";
const SET_IS_AUTH = "SET-IS-AUTH";
const LOG_OUT = "LOG-OUT";
const initialState = {};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH: {
      let stateCopy = { ...state };
      if (localStorage.getItem("token") !== null) {
        stateCopy.isAuth = action.isAuth;
      }
      return stateCopy;
    }
    case LOG_OUT: {
      let stateCopy = { ...state };
      stateCopy.isAuth = false;
      localStorage.removeItem("token");
      return stateCopy;
    }
    default:
      return state;
  }
};
export const setIsAuthAC = (isAuth) => ({ type: SET_IS_AUTH, isAuth: isAuth });
export const logOut = () => ({ type: LOG_OUT });
export const logIn = (email, password) => {
  return async (dispatch) => {
    const response = await api.post("Authenticate/authenticate", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    dispatch(setIsAuthAC(true));
  };
};
export const regUser = (email, password) => {
  return async (dispatch) => {
    const response = await api.post("Authenticate/register", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
  };
};
export const checkAuth = (email, password) => {
  return async (dispatch) => {
    const response = await axios.get(`${API_URL}/refresh`, {
      withCredentials: true,
    });
    localStorage.setItem("token", response.data.token);
    dispatch(setIsAuthAC(true));
  };
};
