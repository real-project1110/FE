import { useInfiniteQuery } from "react-query";
import instance from "./instance/instance";

export const goChatRoom = async (payload) => {
  const data = await instance.get(
    `groups/${payload.groupId}/room?sender=${payload.sender}&receiver=${payload.receiver}`
  );
  return data;
};

// export const readChats = async (payload) => {
//   const { data } = await instance.get(
//     `room/${payload.roomId}?page=${payload.page}&pageSize=${payload.pageSize}`
//   );
//   return data.data;
// };

export const addChat = async (payload) => {
  const data = await instance.post(`room/${payload.roomId}`, payload.body);
  return data;
};

export const readUnread = async (payload) => {
  if (payload.timestamps) {
    const { data } = await instance.get(
      `room?sender=${payload.sender}&receiver=${payload.receiver}&timestamps=${payload.timestamps}`
    );
    return data.data;
  } else {
    return 0;
  }
};

export const useChatApis = {
  ReadChats: (roomId) => {
    const getChats = async ({ pageParam = 1 }) => {
      const { data } = await instance.get(
        `room/${roomId}?page=${pageParam}&pageSize=15`
      );
      return {
        data: data.getChat,
        currentPage: pageParam,
      };
    };

    return useInfiniteQuery(["chatsData", roomId], getChats, {
      getNextPageParam: (lastPage) =>
        lastPage.data[0] ? lastPage.currentPage + 1 : undefined,
      refetchOnWindowFocus: false,
      retry: false,
      //staleTime: Infinity,
    });
  },
};

export const readReceiver = async ({ groupId, roomId }) => {
  const { data } = await instance.get(`groups/${groupId}/room/${roomId}`);
  return data.data;
};
