import { Cookies } from "react-cookie";
import { decodeToken } from "react-jwt";

const cookies = new Cookies();

const myToken = cookies.get("Authorization");

export const decodeUser = () => decodeToken(myToken);
