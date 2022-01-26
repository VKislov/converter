import axios from "axios";
export const userAPI = {
  logIn: (payload) => {
    return axios({
      method: "post",
      data: payload,
      url: "http://94.137.242.252:7777/cock",
      withCredentials: true,
    });
  },
  regUser: (payload) => {
    return axios({
      method: "post",
      data: payload,
      url: "http://94.137.242.252:7777/dick",
      withCredentials: true,
    });
  },
};
