import { userAPI } from "../api/userAPI";

const initialState = { isAuth: false };
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const logIn = (email, password) => {
  const payload = { email, password };
  return async (dispatch) => {
    await userAPI.logIn(payload).then((res) => res);
  };
};
export const logOut = () => {};
export const regUser = (email, password) => {
  const payload = { email, password };
  return async (dispatch) => {
    await userAPI.regUser(payload).then((res) => res);
  };
};
