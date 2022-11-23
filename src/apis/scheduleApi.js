import instance from "../shared/instance";

/** 일정 생성 { id:groupId, body: {title, description, start, end, color} } */
export const addSchedule = async (payload) => {
  console.log(payload);
  const data = await instance.post(`schedules/${payload.id}`, payload.body);
  return data;
};

/** 일정 수정 { id, body:{ title, description, start, end, color  } } */
export const editSchedule = async (payload) => {
  console.log(payload);
  const data = await instance.put(`schedules/${payload.id}`, payload.body);
  return data;
};

/** 일정 삭제 ( id ) */
export const removeSchedule = async (payload) => {
  const data = await instance.delete(`schedules/${payload}`);
  return data;
};

// /** 일정 조회  */
export const readSchedule = async (payload) => {
  const { data } = await instance.get(`schedules/${payload}`);
  return data.data;
};
