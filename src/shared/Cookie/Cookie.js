import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setAccessToken = (accessToken) => {
  return cookies.set("Authorization", accessToken, {
    samSite: "strict",
    path: "/",
  });
};

export const getCookieToken = () => {
  return cookies.get("Authorization");
};

export const removeCookieToken = () => {
  return cookies.remove("Authorization", { sameSite: "strict", path: "/" });
};
