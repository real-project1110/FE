import instance, { postApi } from "../shared/instance";

/** 그룹내 나의 닉네임 수정  { id,body:{ groupUserNickname } } */
export const editGroupUserNickname = async (payload) => {
  const data = await instance.put(
    `groups/${payload.id}/groupUserNickname`,
    payload.body
  );
  return data;
};

/** 그룹내 나의 프로필 이미지 수정 { id,body:{ groupAvatarImg } } */
export const editGroupUserAvatar = async (payload) => {
  const data = await postApi.put(
    `groups/${payload.id}/groupAvatarImg`,
    payload.body
  );
  return data;
};

/** 그룹 내 나의 정보 가져오기 ( id ) */
export const readGroupUser = async (payload) => {
  const { data } = await instance.get(`groups/${payload}/profile`);
  return data;
};

/** 그룹원 프로필 조회  ( id )  */
export const readGroupOtherUser = async (payload) => {
  const { data } = await instance.get(`groups/groupUsers/${payload}`);
  return data;
};

/** 그룹 내 그룹원 전체 조회 (id) */
export const readGroupUsers = async (payload) => {
  const { data } = await instance.get(`groups/${payload}/groupUsers`);
  return data;
};
