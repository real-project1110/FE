import axios from "axios";
import { getCookieToken } from "../../shared/Cookie/Cookie";

// const baseURL = process.env.REACT_APP_SERVER_URL;
const baseURL = "https://wjdgusgg.shop:4000/";

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

// instance.interceptors.request.use((config) => {
//   const token = getCamperToken();
//   if (token) {
//     config.headers = { authorization: token };
//     return config;
//   }
//   return config;
// });

// instance.interceptors.request.use(
//   function (config) {
//     config.headers["Authorization"] = `Bearer ${myToken}`;
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );
