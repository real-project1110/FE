import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import ChatBox from "../../../components/Chats/ChatBox";
import ChatForm from "../../../components/Chats/ChatForm";
import useSocket from "../../../hooks/useSocket";
import { groupUserAtom, groupUserListAtom } from "../../../recoil/userAtoms";
import { FlexCenterBox } from "../../../shared/Styles/flex";
import { handleImgError } from "../../../utils/handleImgError";
import makeSection from "../../../utils/makeSection";

const Chat = () => {
  const { groupId, groupUserId } = useParams();
  const [otherUser, setOtherUser] = useState({});
  const [chats, setChats] = useState(fakeData);
  const groupUserList = useRecoilValue(groupUserListAtom);
  const me = useRecoilValue(groupUserAtom);
  const scrollRef = useRef(null);
  //const [socket] = useSocket(groupId);

  const isEmpty = useMemo(() => chats && chats[0]?.length === 0, [chats]);

  const isReachingEnd = useMemo(
    () => isEmpty || (chats && chats[chats.length - 1]?.length < 20) || false,
    [chats, isEmpty]
  );

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
    scrollRef.current?.scrollToBottom();
    // if (chats?.length === 1) {
    //   setTimeout(() => {
    //     scrollRef.current?.scrollToBottom();
    //   }, 100);
    // }
  }, [chats]);

  // 그룹 유저 리스트에서 채팅을 보낼 사람에 대한 정보를 가져온다.
  useEffect(() => {
    if (groupUserList) {
      setOtherUser(
        groupUserList.find((user) => user.groupUserId === +groupUserId)
      );
    }
  }, [groupUserId, groupUserList]);

  // useEffect(() => {
  //   socket.emit("joinroom", groupId);
  // }, [groupId, socket]);

  // useEffect(() => {
  //   socket.on("chatting", (data) => {
  //     console.log("get chatting", data);
  //     setChats((prev) => [...prev, data]);
  //   });
  // }, [socket]);

  // useEffect(() => {
  //   return () => socket.off("chatting");
  // }, [socket]);

  // useEffect(() => {
  //   return () => socket.off("joinroom");
  // }, [socket]);

  const chatSections = useMemo(() => {
    return makeSection(chats ? chats.flat() : []);
  }, [chats]);

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
          {Object.entries(chatSections).map(([date, chats]) => {
            return (
              <DaySection>
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
        groupId={groupId}
      />
    </Wrapper>
  );
};

export default Chat;

const fakeData = [
  {
    groupUserId: 3,
    message: "안녕하세요요안녕하세요",
    createdAt: "2022-10-30T15:49:43.122Z",
  },
  {
    groupUserId: 1,
    message: "안녕하세요",
    createdAt: "2022-10-30T15:49:43.122Z",
  },
  {
    groupUserId: 3,
    message: "찍찍찍! 쥐새키가 뻔뻔하게~",
    createdAt: "2022-11-27T15:49:43.122Z",
  },
  {
    groupUserId: 3,
    message: "찍찍찍! 쥐새키가 뻔뻔하게~",
    createdAt: "2022-11-28T15:49:43.122Z",
  },
  { groupUserId: 1, message: "에이맨~", createdAt: "2022-11-28T15:49:43.122Z" },
  {
    groupUserId: 3,
    message: "찍찍찍! 쥐새키가 뻔뻔하게~",
    createdAt: "2022-11-28T15:49:43.122Z",
  },
  { groupUserId: 1, message: "에이맨~", createdAt: "2022-11-30T15:49:43.122Z" },

  { groupUserId: 1, message: "에이맨~", createdAt: "2022-11-30T15:49:43.122Z" },
];

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
