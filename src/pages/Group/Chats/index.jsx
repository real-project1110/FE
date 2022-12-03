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
import styled from "styled-components";
import ChatBox from "../../../components/Chats/ChatBox";
import ChatForm from "../../../components/Chats/ChatForm";
import useSocket from "../../../hooks/useSocket";
import { groupUserAtom } from "../../../recoil/userAtoms";
import { FlexCenterBox } from "../../../shared/Styles/flex";
import { handleImgError } from "../../../utils/handleImgError";
import makeSection from "../../../utils/makeSection";
import { chatUserAtom } from "../../../recoil/userAtoms";
import { useQuery } from "react-query";
import { readChats } from "../../../apis/chatApis";
import { groupAtom } from "../../../recoil/groupAtoms";

const Chat = () => {
  const { groupId, roomId } = useParams();
  const [chats, setChats] = useState([]);
  const otherUser = useRecoilValue(chatUserAtom);
  const me = useRecoilValue(groupUserAtom);
  const group = useRecoilValue(groupAtom);
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [socket] = useSocket(groupId);
  const page = 1;
  const pageSize = 15;
  // 여기 삭제
  console.log(group.roomIds);
  const { data: chatsData } = useQuery(
    ["chats", roomId],
    () => readChats({ roomId, page, pageSize }),
    {
      staleTime: 10000,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );

  const isEmpty = useMemo(() => chats && chats[0]?.length === 0, [chats]);

  const isReachingEnd = useMemo(
    () => isEmpty || (chats && chats[chats.length - 1]?.length < 20) || false,
    [chats, isEmpty]
  );

  const chatSections = useMemo(() => {
    if (!chats) return;
    return makeSection(chats ? chats.flat().reverse() : []);
  }, [chats]);

  const sectionsLen = useMemo(() => {
    if (!chatSections) return;
    return Object.keys(chatSections).length;
  }, [chatSections]);

  // 스크롤 이벤트  ( 스크롤이 가장 위로 도달하였을 때 데이터를 불러오는 함수 )
  const onScroll = useCallback(
    (values) => {
      if (values.scrollTop === 0 && !isReachingEnd) {
        console.log("가장 위");
        // const current = scrollRef?.current;
        // if (current) {
        //   current.scrollTop(current.getScrollHeight() - values.scrollHeight);
        // }
        //   setSize((prevSize) => prevSize + 1).then(() => {
        //     // 스크롤 위치 유지
        //     const current = scrollRef?.current;
        //     if (current) {
        //       current.scrollTop(current.getScrollHeight() - values.scrollHeight);
        //     }
      }
    },
    [isReachingEnd]
  );

  // chats의 값이 변화할 때마다 스크롤을 밑으로 보냄
  useEffect(() => {
    if (sectionsLen) {
      scrollRef.current?.scrollToBottom();
    }
  }, [sectionsLen]);

  useEffect(() => {
    if (chatsData) setChats(chatsData);
  }, [chatsData]);

  useEffect(() => {
    socket.emit("joinRoom", { roomId });
  }, [groupId, socket, roomId]);

  useEffect(() => {
    socket.on("message", (data) => {
      setChats((prev) => [data, ...prev]);
    });
  }, [socket]);

  useEffect(() => {
    return () => {
      socket.off("message");
      socket.off("joinRoom");
    };
  }, [socket]);

  useEffect(() => {
    if (group && !group.roomIds.includes(+roomId)) {
      navigate(-1);
    }
  }, [group, roomId, navigate]);

  return (
    <Wrapper as="main">
      <Header>
        <img
          src={otherUser?.groupAvatarImg}
          alt={otherUser?.groupUserNickname}
          onError={handleImgError}
        />
        <h3>{otherUser?.groupUserNickname}</h3>
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
                      otherUser={otherUser}
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
        roomId={roomId}
        groupId={groupId}
        scrollRef={scrollRef}
      />
    </Wrapper>
  );
};

export default Chat;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.boardColor.white};
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.color.white};
  padding: 0.5rem 1rem;
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 8px;
    object-fit: cover;
    border-radius: 50%;
  }
  h3 {
    font-weight: 500;
    font-size: 1.1rem;
  }
`;
export const ChatList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.boardColor.yellowGray};
  height: 100%;
  //padding: 3rem 0 0.7rem 0;
`;

export const DaySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 28px;
  margin-top: 3rem;
`;

export const DayHeader = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  //position: sticky;
  top: 14px;
  border-top: 1px solid ${(props) => props.theme.color.gray};
  & button {
    ${FlexCenterBox};
    position: relative;
    top: -15px;
    z-index: 2;
    height: 28px;
    padding: 10px;
    color: ${(props) => props.theme.color.gray};
    font-size: 14px;
    line-height: 27px;
    background: ${(props) => props.theme.boardColor.yellowGray};
    border: 1px solid ${(props) => props.theme.color.gray};
    border-radius: 24px;
    outline: none;
  }
`;
