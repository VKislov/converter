import axios from "axios";
export const authAPI = {
  logIn: (payload) => {
    return axios({
      method: "post",
      data: payload,
      url: "http://94.137.242.252:7777/cock",
      withCredentials: true,
    });
  },
};
