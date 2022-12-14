import instance from "./instance/instance";

// status 생성
export const addStatus = async (payload) => {
  const { data } = await instance.post(
    `groups/${payload.groupId}/color`,
    payload.body
  );
  return data;
};

// status 조회
export const readStatus = async (payload) => {
  const { data } = await instance.get(`groups/${payload}/color`);
  return data.data;
};

// status 삭제 (groupId/colorId)
export const removeStatus = async (payload) => {
  const data = await instance.delete(
    `groups/${payload.groupId}/color/${payload.colorId}`
  );
  return data;
};
