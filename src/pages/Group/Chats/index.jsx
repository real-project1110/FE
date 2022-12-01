import React, { useEffect, useMemo, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import ChatBox from "../../../components/Chats/ChatBox";
import ChatForm from "../../../components/Chats/ChatForm";
import useSocket from "../../../hooks/useSocket";
import { groupUserAtom, groupUserListAtom } from "../../../recoil/userAtoms";
import { handleImgError } from "../../../utils/handleImgError";
import makeSection from "../../../utils/makeSection";

const Chat = () => {
  const { groupId, groupUserId } = useParams();
  const [otherUser, setOtherUser] = useState({});
  const [chats, setChats] = useState(fakeData);
  const groupUserList = useRecoilValue(groupUserListAtom);
  const me = useRecoilValue(groupUserAtom);
  //const [socket] = useSocket(groupId);

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
    return makeSection(chats ? chats.flat().reverse() : []);
  }, [chats]);

  console.log(chatSections);
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
        <Scrollbars>
          {Object.entries(chatSections).map(([date, chats]) => {
            return (
              <DaySection>
                <DayHeader>{date}</DayHeader>
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
    createdAt: "2022-12-01T15:49:43.122Z",
  },
  {
    groupUserId: 1,
    message: "안녕하세요",
    createdAt: "2022-12-01T15:49:43.122Z",
  },
  {
    groupUserId: 3,
    message: "찍찍찍! 쥐새키가 뻔뻔하게~",
    createdAt: "2022-12-02T15:49:43.122Z",
  },
  { groupUserId: 1, message: "에이맨~", createdAt: "2022-12-02T15:49:43.122Z" },
  {
    groupUserId: 3,
    message: "찍찍찍! 쥐새키가 뻔뻔하게~",
    createdAt: "2022-12-03T15:49:43.122Z",
  },
  { groupUserId: 1, message: "에이맨~", createdAt: "2022-12-03T15:49:43.122Z" },
  {
    groupUserId: 3,
    message: "찍찍찍! 쥐새키가 뻔뻔하게~",
    createdAt: "2022-12-02T15:49:43.122Z",
  },
  { groupUserId: 1, message: "에이맨~", createdAt: "2022-12-02T15:49:43.122Z" },
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
`;

export const DaySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem 0.7rem 1rem;
`;

export const DayHeader = styled.div``;
