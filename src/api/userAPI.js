import axios from "axios";
export const API_URL = `http://94.137.242.252:7777`;
const api = axios.create({ withCredentials: false, baseURL: API_URL });
api.interceptors.request.use((config) => {
  config.headers.Authorization = `${localStorage.getItem("token")}`;
  return config;
});
const userAPI = {
  getImageHistoryList: () => {
    return;
  },
};

export default api;
