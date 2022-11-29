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

// status 삭제 (groupId/colorId)
export const removeStatus = async (payload) => {
  console.log(payload);
  const data = await instance.delete(
    `groups/${payload.groupId}/color/${payload.colorId}`
  );
  return data;
};

// status 수정 사용여부 파악중
// export const editStatus = async (payload) => {
//   const data = await postApi.put(`groups/color/${payload.id}`, payload.body);
//   return data;
// };
