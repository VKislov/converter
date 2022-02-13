import { api } from '../../api/api';
import { IAuthReducerState, AuthActionTypes, TAuthReducerActions} from './interface/index';

const SET_IS_AUTH = "SET-IS-AUTH";
const LOG_OUT = "LOG-OUT";
const SET_BED_REQ = "SET-BED-REQ";
const initialState:IAuthReducerState = { bedReq: null, isAuth: localStorage.getItem("token") };
export const authReducer = (state = initialState, action:TAuthReducerActions):IAuthReducerState=> {
  switch (action.type) {
    case AuthActionTypes.SET_IS_AUTH: {
      let stateCopy:IAuthReducerState = { ...state };
        stateCopy.isAuth = action.isAuth;
      return stateCopy;
    }
    case AuthActionTypes.LOG_OUT: {
      let stateCopy = { ...state };
      localStorage.removeItem("token");
      stateCopy.isAuth = null;
      return stateCopy;
    }
    case AuthActionTypes.SET_BED_REQ: {
      let stateCopy = { ...state };
      stateCopy.bedReq = action.bedReq;
      return stateCopy;
    }
    default:
      return state;
  }
};
export const setIsAuthAC= (isAuth:string|null) => ({ type: SET_IS_AUTH, isAuth });
export const setBedReqAC = (errorMessage:string|null) => ({
  type: SET_BED_REQ,
  bedReq: errorMessage,
});

export const logOut = () => ({ type: LOG_OUT });
export const logIn = (email:string, password:string) => {
  return async (dispatch:any) => {
    try {
      let response = await api.post("Authenticate/authenticate", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      dispatch(setIsAuthAC(localStorage.getItem("token")));
    } catch (e:any) {
      dispatch(setBedReqAC(e.response.data.message));
    }
  };
};
export const regUser = (email:string, password:string) => {
  return async (dispatch:any) => {
    try {
      let response = await api.post("Authenticate/register", {
        email,
        password,
      });
      dispatch(setBedReqAC(localStorage.getItem("token")));
      localStorage.setItem("token", response.data.token);
    } catch (e:any) {
      dispatch(setBedReqAC(e.response.data.message));
    }
  };
};
