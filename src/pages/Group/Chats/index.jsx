import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import ChatBox from "../../../components/Chats/ChatBox";
import ChatForm from "../../../components/Chats/ChatForm";
import useSocket from "../../../hooks/useSocket";
import { groupUserAtom } from "../../../recoil/userAtoms";
import { handleImgError } from "../../../utils/handleImgError";
import makeSection from "../../../utils/makeSection";
import { readReceiver, useChatApis } from "../../../apis/chatApis";
import { ChatList, DayHeader, DaySection, Header, Wrapper } from "./styles";
import { groupAtom } from "../../../recoil/groupAtoms";
import { useQuery } from "react-query";

const Chat = () => {
  const { groupId, roomId } = useParams();
  const [chats, setChats] = useState([]);

  const { data: receiver } = useQuery(
    ["receiver", roomId],
    () => readReceiver({ groupId, roomId }),
    { retry: 0, staleTime: Infinity }
  );
  const me = useRecoilValue(groupUserAtom);
  const scrollRef = useRef(null);
  const [socket] = useSocket(groupId);
  const [pages, setPages] = useState(0);
  const navigate = useNavigate();
  const group = useRecoilValue(groupAtom);
  const {
    data: chatsData,
    fetchNextPage,
    hasNextPage,
  } = useChatApis.ReadChats(roomId);

  const [height, setHeight] = useState(null);

  // 채팅방에 데이터가 없는지 확인 (없으면 true)
  const isEmpty = useMemo(() => chats && chats[0]?.length === 0, [chats]);

  // 스크롤을 올려도 가져올 데이터가 없다면 true
  const isReachingEnd = useMemo(
    () => isEmpty || (chats && chats[chats.length - 1]?.length < 15) || false,
    [chats, isEmpty]
  );
  // 채팅 날짜별로 데이터를 묶어주는 함수
  const chatSections = useMemo(() => {
    if (!chats) return;
    return makeSection(chats ? chats.flat().reverse() : []);
  }, [chats]);

  // 스크롤 이벤트  ( 스크롤이 가장 위로 도달하였을 때 데이터를 불러오는 함수 )
  const onScroll = useCallback(
    (values) => {
      if (values.scrollTop === 0 && !isReachingEnd && hasNextPage) {
        fetchNextPage();
        setPages((prev) => prev + 1);
        setHeight(values);
      }
    },
    [isReachingEnd, fetchNextPage, hasNextPage]
  );

  // 속한 그룹이 아니라면 이전 페이지로 이동
  useEffect(() => {
    if (group && roomId) {
      if (!group.roomIds?.includes(+roomId)) return navigate(-1);
    }
  }, [group, roomId, navigate]);

  // 채팅방에 처음 입장했을 때 스크롤 밑으로 보내기
  useEffect(() => {
    if (pages === 0 && Object.keys(chatSections).length) {
      setTimeout(() => {
        scrollRef.current?.scrollToBottom();
      }, 50);
    }
  }, [chatSections, pages]);

  // 스크롤의 꼭대기를 찍었을 때 현재 height - 이전 height
  useEffect(() => {
    if (height && chatSections) {
      scrollRef?.current.scrollTop(
        scrollRef?.current.getScrollHeight() - height?.scrollHeight
      );
    } else {
      if (scrollRef.current) {
        if (
          scrollRef.current.getScrollHeight() <
          scrollRef.current.getClientHeight() +
            scrollRef.current.getScrollTop() +
            150
        ) {
          scrollRef.current?.scrollToBottom();
        }
      }
    }
  }, [height, chatSections]);

  // 채팅방에 입장했을 때 소켓으로 입장 이벤트 보내기
  useEffect(() => {
    if (roomId && me) {
      socket.emit("joinRoom", { roomId, groupUserId: me?.groupUserId });
    }
  }, [groupId, socket, roomId, me]);

  // 채팅방에 입장했을 때 시간 저장
  useEffect(() => {
    if (groupId && me && receiver) {
      localStorage.setItem(
        `${groupId}-${me?.groupUserId}-${receiver?.groupUserId}`,
        //new Date()
        new Date().getTime().toString()
      );
    }
  }, [groupId, roomId, me, receiver]);

  // 스크롤을 올릴 때 state에 데이터 추가 (무한스크롤)
  useEffect(() => {
    if (pages > 0 && chatsData && chatsData.pages[pages]?.data) {
      setChats((prev) => [...prev, chatsData?.pages[pages]?.data]);
    }
  }, [chatsData, pages, roomId]);

  // 마운트 되었을 때 데이터가 있다면 setChats 없다면 빈배열로 설정
  useEffect(() => {
    if (pages === 0 && chatsData?.pages[0]?.data.length > 0) {
      setChats(chatsData?.pages[0]?.data);
    } else if (chatsData?.pages[0]?.data.length === 0) setChats([]);
  }, [chatsData, pages, roomId]);

  // 메세지를 받을 때 마다 실행
  useEffect(() => {
    if (socket && me && receiver) {
      socket.on("message", (data) => {
        // 채팅방 접속 시간 갱신
        localStorage.setItem(
          `${groupId}-${me.groupUserId}-${receiver.groupUserId}`,
          new Date().getTime().toString()
        );
        // 내가 보낸 메시지가 아니라면 state에 추가
        if (data.groupUserId !== me.groupUserId) {
          setChats((prev) => [data, ...prev]);
        }
      });
    }
  }, [socket, groupId, me, receiver]);

  // 채팅방을 나갔을 때 실행 소켓의 이벤트에 대한 연결을 off
  useEffect(() => {
    return () => {
      socket.emit("leaveRoom", { roomId, groupUserId: me.groupUserId });
      socket.off("leaveRoom");
      socket.off("message");
      socket.off("joinRoom");
      setPages(0);
    };
  }, [socket, me, roomId]);

  return (
    <Wrapper as="main">
      <Header>
        {receiver ? (
          <img
            src={receiver?.groupAvatarImg}
            alt={receiver?.groupUserNickname}
            onError={handleImgError}
          />
        ) : (
          <div />
        )}

        <h3>{receiver?.groupUserNickname}</h3>
      </Header>
      <ChatList>
        <Scrollbars autoHide ref={scrollRef} onScrollFrame={onScroll}>
          {chatSections &&
            Object.entries(chatSections)?.map(([date, chats]) => {
              return (
                <DaySection key={date}>
                  <DayHeader>
                    <button>{date}</button>
                  </DayHeader>
                  {chats?.map((chat, idx) => (
                    <ChatBox
                      key={chat?.message + idx}
                      isMe={chat?.groupUserId === me?.groupUserId}
                      otherUser={receiver}
                      chat={chat}
                    />
                  ))}
                </DaySection>
              );
            })}
        </Scrollbars>
      </ChatList>
      <ChatForm
        setChats={setChats}
        groupUserId={me?.groupUserId}
        otherUserId={receiver?.groupUserId}
        roomId={roomId}
        groupId={groupId}
        scrollRef={scrollRef}
      />
    </Wrapper>
  );
};

export default Chat;
