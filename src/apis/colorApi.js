import instance, { postApi } from "../shared/instance";

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

// status 삭제 (id)
export const removeStatus = async (payload) => {
  const data = await instance.delete(`groups/color/${payload}`);
  return data;
};

// status 수정
export const editStatus = async (payload) => {
  const data = await postApi.put(`groups/color/${payload.id}`, payload.body);
  return data;
};
