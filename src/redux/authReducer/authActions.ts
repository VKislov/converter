import { api } from '../../api/api';
import { Dispatch } from 'redux';
import { authReducerConsts } from '../common/actionTypeConsts';
import { IAction } from '../interface';
export const setIsAuthAC= (isAuth:string|null) => ({ type: authReducerConsts.SET_IS_AUTH, isAuth });
export const setBedReqAC = (errorMessage:string|null) => ({
  type: authReducerConsts.SET_BED_REQ,
  bedReq: errorMessage,
});
export const logOut = () => ({ type: authReducerConsts.LOG_OUT });
export const logIn = (email:string, password:string) => {
  return async (dispatch:Dispatch<IAction>) => {
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
  return async (dispatch:Dispatch<IAction>) => {
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