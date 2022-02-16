import axios from "axios";

export const API_URL = `https://api.gachiboyconverter.site`;
export const api = axios.create({ withCredentials: false, baseURL: API_URL });
api.interceptors.request.use((config:any) => {
  config.headers.Authorization = `${localStorage.getItem("token")}`;
  return config;
});