import instance from "../shared/instance";

/** 일정 생성 { id:groupId, body: {title, description, start, end, color} } */
export const addSchedule = async (payload) => {
  console.log(payload);
  const data = await instance.post(`groups/schedules/${payload.id}`, payload.body);
  return data;
};

/** 일정 수정 { id:groupId, body:{ title, description, start, end, color  } } */
export const editSchedule = async (payload) => {
  console.log(payload);
  const data = await instance.put(`groups/schedules/${payload.id}`, payload.body);
  return data;
};

/** 일정 삭제 ( groupId ) */
export const removeSchedule = async (payload) => {
  const data = await instance.delete(`groups/schedules/${payload}`);
  return data;
};

// /** 일정 조회  (groupId) */
export const readSchedule = async (payload) => {
  const { data } = await instance.get(`groups/schedules/${payload}`);
  return data.data;
};
