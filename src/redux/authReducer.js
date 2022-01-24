import { authAPI } from "../api/authAPI";

const initialState = { email: null, password: null, isAuth: false };
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const logIn = (email, password) => {
  const payload = { email, password };
  return async (dispatch) => {
    await authAPI.logIn(payload).then((res) => res);
  };
};
export const logOut = () => {};
