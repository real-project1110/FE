import instance from "../instance";

/** 일정 생성 { title, description, start, end, colorId } */
export const addSchedule = async (payload) => {
  const data = await instance.post("schedule", payload);
  return data;
};

/** 일정 수정 { id, body:{ title, description, start, end, colorId  } } */
export const editSchedule = async (payload) => {
  const data = await instance.put(`schedule/${payload.id}`, payload.body);
  return data;
};

/** 일정 삭제 ( id ) */
export const removeSchedule = async (payload) => {
  const data = await instance.delete(`schedule/${payload}`);
  return data;
};

// /** 일정 조회  */
// export const readSchedule = async (payload) => {
//   const { data } = await instance.get(``);
// };
