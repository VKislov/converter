import axios from "axios";
export const initialAPI = {
  initialExt: () => {
    return axios({
      method: "get",
      url: "http://u1589542.plsk.regruhosting.ru/AvailableExtensions",
      headers: { Authorization: `${localStorage.getItem("token")}` },
    });
  },
};
