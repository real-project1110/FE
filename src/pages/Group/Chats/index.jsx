import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import ChatBox from "../../../components/Chats/ChatBox";
import ChatForm from "../../../components/Chats/ChatForm";
import { groupUserListAtom } from "../../../recoil/userAtoms";
import { handleImgError } from "../../../utils/handleImgError";

const Chat = () => {
  const { groupId, groupUserId } = useParams();
  const [otherUser, setOtherUser] = useState({});
  const groupUserList = useRecoilValue(groupUserListAtom);
  console.log(groupUserList);

  useEffect(() => {
    if (groupUserList) {
      setOtherUser(
        groupUserList.find((user) => user.groupUserId === +groupUserId)
      );
    }
  }, [groupUserId, groupUserList]);

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
        <DaySection>
          {fakeData.map((chat, idx) => (
            <ChatBox
              key={chat.text + idx}
              isMe={chat.isMe}
              otherUser={otherUser}
              chat={chat}
            />
          ))}
        </DaySection>
      </ChatList>
      <ChatForm />
    </Wrapper>
  );
};

export default Chat;

const fakeData = [
  {
    isMe: false,
    text: "안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요v안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요",
  },
  { isMe: true, text: "안녕하세요" },
  { isMe: false, text: "찍찍찍! 쥐새키가 뻔뻔하게~" },
  { isMe: true, text: "에이맨~" },
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
