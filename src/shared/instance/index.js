import axios from "axios";
import { getCookieToken } from "../../shared/Cookie/Cookie";

const baseURL = process.env.REACT_APP_SERVER_URL;

const myToken = getCookieToken();

//const refreshToken = localStorage.getItem("token");

export const instance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${myToken}`,
    "Cache-Control": "no-cache",
    withCredentials: true,
  },
});

export const postApi = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${myToken}`,
    "Content-Type": "multipart/form-data",
    "Cache-Control": "no-cache",
    withCredentials: true,
  },
});

export default instance;
