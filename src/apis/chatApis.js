import instance from "./instance/instance";

export const goChatRoom = async (payload) => {
  const data = await instance.get(
    `groups/${payload.groupId}/room?users=${payload.body}`
  );
  return data;
};

export const readChats = async (payload) => {
  const { data } = await instance.get(
    `room/${payload.roomId}?page=${payload.page}&pageSize=${payload.pageSize}`
  );
  return data.data;
};

export const addChat = async (payload) => {
  const data = await instance.post(`room/${payload.roomId}`, payload.body);
  return data;
};