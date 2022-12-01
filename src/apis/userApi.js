import axios from "axios";
import instance, { postApi } from "./instance/instance";

/** 회원가입 */
export const signup = async (payload) => {
  const data = await instance.post("users/signup", payload);
  return data;
};

/** 로그인 */
export const signin = async (payload) => {
  const data = await instance.post("users/login", payload);
  return data;
};

/** 내 정보 가져오기 */
export const readUser = async () => {
  const { data } = await instance.get("users/myprofile");
  return data.data;
};

/** 이메일 인증 보내기 */
export const checkEmail = async (payload) => {
  const data = await instance.post("users/emailcheck", payload);
  return data;
};

/** 인증번호 확인하기 */
export const checkEmailNum = async (payload) => {
  const data = await instance.post("users/emailcheck/auth", payload);
  return data;
};

/** 나의 프로필 이미지 수정  { avatarImg } */
export const editAvatar = async (payload) => {
  const data = await postApi.put("users/avatarImg", payload);
  return data;
};

/** 나의 프로필 닉네임 수정  { nickname } */
export const editNickname = async (payload) => {
  const data = await instance.put("users/nickname", payload);
  return data;
};
