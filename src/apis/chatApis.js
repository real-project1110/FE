import { useInfiniteQuery } from "react-query";
import instance from "./instance/instance";

// 채팅룸 id를 받아오는 요청
export const goChatRoom = async (payload) => {
  const data = await instance.get(
    `groups/${payload.groupId}/room?sender=${payload.sender}&receiver=${payload.receiver}`
  );
  return data;
};

// 채팅 메시지를 생성하는 요청
export const addChat = async (payload) => {
  const data = await instance.post(`room/${payload.roomId}`, payload.body);
  return data;
};

// 읽지 않은 메시지의 갯수를 받아오는 요청
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

// 채팅룸에 메시지들을 받아오는 요청
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

// 채팅창에서 받는 사람에 대한 정보를 받아오는 요청
export const readReceiver = async ({ groupId, roomId }) => {
  const { data } = await instance.get(`groups/${groupId}/room/${roomId}`);
  return data.data;
};
