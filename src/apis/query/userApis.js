import instance, { postApi } from "../instance";

/** 내 정보 가져오기 */
export const readUser = async () => {
  const { data } = await instance.get("users/myProfile");
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
