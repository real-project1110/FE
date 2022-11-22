import instance, { postApi } from "../shared/instance";

/** 그룹 생성  { groupName } */
export const addGroup = async (payload) => {
  try {
    const { data } = await instance.post("groups", payload);
    return data.data;
  } catch (e) {
    return e;
  }
};

/** 그룹 이름 수정 { id,body:{ groupName } } */
export const EditGroupName = async (payload) => {
  const data = await instance.put(`groups/${payload.id}`, payload.body);
  return data;
};

/** 상세 그룹 조회(캘린더?)  ( id ) */
export const readGroup = async (payload) => {
  const { data } = await instance.get(`groups/${payload}`);
  return data.data;
};

/** 자신이 속해 있는 그룹 목록 조회 */
export const readGroups = async () => {
  const { data } = await instance.get("groups");
  // 이거 아마 data.data로 리턴해야할 듯?
  return data.data;
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
export const inviteUsers = async (payload) => {
  const data = await instance.post(`invites/${payload.id}`, payload.body);
  return data;
};

/** 초대 목록 가져오기 */
export const readInvites = async () => {
  const { data } = await instance.get("invites");
  return data.data;
};
