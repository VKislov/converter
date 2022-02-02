import axios from "axios";
export const initialAPI = {
  initialExt: () => {
    return axios({
      method: "get",
      url: "http://94.137.242.252:7777/AvailableExtensions",
      headers: { Authorization: `${localStorage.getItem("token")}` },
    });
  },
};
