import instance from "./instance/instance";

// /** 일정 조회  (groupId) */
export const readSchedule = async (payload) => {
  const { data } = await instance.get(`groups/${payload}/schedules`);
  return data.data;
};

/** 일정 생성 { groupId, body: {title, description, start, end, color} } */
export const addSchedule = async (payload) => {
  const data = await instance.post(`groups/${payload.groupId}/schedules`, payload.body);
  return data;
};

/** 일정 수정 { scheduleId,groupId, body:{ title, description, start, end, color  } } */
export const editSchedule = async (payload) => {
  const data = await instance.put(`groups/${payload.groupId}/schedules/${payload.scheduleId}`, payload.body);
  return data;
};

/* 일정 드래그앤드랍, 리사이징으로 수정 */
export const DragResizeSchedule = async (payload) => {
  const data = await instance.put(`groups/${payload.groupId}/schedules/${payload.scheduleId}/drag`, payload.body);
  return data;
};

/** 일정 삭제 ( groupId ) */
export const removeSchedule = async (payload) => {
  console.log(payload);
  const data = await instance.delete(`groups/${payload.groupId}/schedules/${payload.scheduleId}`);
  return data;
};
