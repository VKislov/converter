import { IAuthReducerState, AuthActionTypes, TAuthReducerActions} from './interface/index';


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

