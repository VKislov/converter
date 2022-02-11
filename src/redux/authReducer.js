import { api } from "../api/api";

const SET_IS_AUTH = "SET-IS-AUTH";
const LOG_OUT = "LOG-OUT";
const SET_BED_REQ = "SET-BED-REQ";
const initialState = { bedReq: null, isAuth: localStorage.getItem("token") };
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
      localStorage.removeItem("token");
      stateCopy.isAuth = localStorage.getItem("token");
      return stateCopy;
    }
    case SET_BED_REQ: {
      let stateCopy = { ...state };
      stateCopy.bedReq = action.bedReq;
      return stateCopy;
    }
    default:
      return state;
  }
};
export const setIsAuthAC = (isAuth) => ({ type: SET_IS_AUTH, isAuth: isAuth });
export const setBedReqAC = (errorMessage) => ({
  type: SET_BED_REQ,
  bedReq: errorMessage,
});

export const logOut = () => ({ type: LOG_OUT });
export const logIn = (email, password) => {
  return async (dispatch) => {
    try {
      let response = await api.post("Authenticate/authenticate", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      dispatch(setIsAuthAC(true));
    } catch (e) {
      dispatch(setBedReqAC(e.response.data.message));
    }
  };
};
export const regUser = (email, password) => {
  return async (dispatch) => {
    try {
      let response = await api.post("Authenticate/register", {
        email,
        password,
      });
      dispatch(setBedReqAC(localStorage.getItem("token")));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      dispatch(setBedReqAC(e.response.data.message));
    }
  };
};
