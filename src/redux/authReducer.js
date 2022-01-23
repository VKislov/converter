import { authAPI } from "../api/authAPI";

const LOG_IN = "LOG-IN";
const initialState = { email: null, password: null, isAuth: false };
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      let stateCopy = { ...state };
      stateCopy.email = action.email;
      stateCopy.email = action.password;
      return stateCopy;
    }
    default:
      return { ...state };
  }
};
export const logInAC = (email, password) => ({
  type: LOG_IN,
  email: email,
  password: password,
});
export const logIn = (email, password) => {
  const payload = { email, password };
  return async (dispatch) => {
    dispatch(logInAC(email, password));
    await authAPI.logIn(payload).then((res) => res);
  };
};
export const logOut = () => {};
