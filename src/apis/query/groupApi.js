import instance, { postApi } from "../instance";

/** 그룹 생성  { groupName } */
export const addGroup = async (payload) => {
  const { data } = await instance.post("groups", payload);
  return data;
};

/** 그룹 이름 수정 { id,body:{ groupName } } */
export const EditGroupName = async (payload) => {
  const data = await instance.put(`groups/${payload.id}`, payload.body);
  return data;
};

/** 상세 그룹 조회(캘린더?)  ( id ) */
export const readGroup = async (payload) => {
  const { data } = await instance.get(`groups/${payload}`);
  return data;
};

/** 자신이 속해 있는 그룹 목록 조회 */
export const readGroups = async () => {
  const { data } = await instance.get("groups");
  // 이거 아마 data.data로 리턴해야할 듯?
  return data;
};

/** 그룹 나가기(삭제?)  ( id ) */
export const removeGroup = async (payload) => {
  const data = await instance.delete(`groups/${payload}`);
  return data;
};

/** 그룹 대표 이미지 수정  { id,body:{ groupImg } } */
export const editGroupImage = async (payload) => {
  const data = await postApi.put(`groups/${payload.id}/groupImg`, payload.body);
  return data;
};

/** 그룹 초대  { id,body:{ email } } */
export const inviteGroup = async (payload) => {
  const data = await instance.post(
    `groups/${payload.id}/invites`,
    payload.body
  );
  return data;
};

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