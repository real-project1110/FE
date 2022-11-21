import { Cookies } from "react-cookie";
import { isExpired } from "react-jwt";
import { removeCookieToken } from "../shared/Cookie/Cookie";

export const existCookie = () => {
  const cookies = new Cookies();
  const myToken = cookies.get("Authorization");
  if (!myToken) return false;
  const isTokenExpired = isExpired(myToken);
  if (isTokenExpired) {
    removeCookieToken();
    return false;
  } else return true;
};
