import axios from "axios";
import { getCookieToken } from "../../shared/Cookie/Cookie";

const baseURL = process.env.REACT_APP_SERVER_URL;

const myToken = getCookieToken();

export const instance = axios.create({
  baseURL,
  headers: {
    Authorization: myToken,
    "Cache-Control": "no-cache",
    withCredentials: true,
  },
});

export const postApi = axios.create({
  baseURL,
  headers: {
    Authorization: myToken,
    "Content-Type": "multipart/form-data",
    "Cache-Control": "no-cache",
    withCredentials: true,
  },
});

export default instance;
