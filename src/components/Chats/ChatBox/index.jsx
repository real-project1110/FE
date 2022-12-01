import React from "react";
import { handleImgError } from "../../../utils/handleImgError";
import { ChatContainer, Comment, UserImg } from "./styles";

const ChatBox = ({ isMe, otherUser, chat }) => {
  return (
    <ChatContainer isMe={isMe}>
      {isMe ? (
        <div />
      ) : (
        <UserImg
          src={otherUser?.groupAvatarImg}
          alt={otherUser?.groupUserNickname}
          onError={handleImgError}
        />
      )}
      <Comment isMe={isMe}>
        {isMe ? (
          <div>
            <strong>1</strong>
            <span>오후 11:33</span>
          </div>
        ) : null}
        <p>{chat?.message} </p>
        {!isMe ? <span>오후 11:33</span> : null}
      </Comment>
    </ChatContainer>
  );
};

export default ChatBox;
