import dayjs from "dayjs";
import "dayjs/locale/ko";
import React from "react";
import { handleImgError } from "../../../utils/handleImgError";
import { ChatContainer, Comment, UserImg } from "./styles";

dayjs.locale("ko");
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
            {/* <strong>1</strong> */}
            <span>{dayjs(chat.createdAt).format("A HH:mm")}</span>
          </div>
        ) : null}
        <p>{chat?.message} </p>
        {!isMe ? <span>{dayjs(chat.createdAt).format("A HH:mm")}</span> : null}
      </Comment>
    </ChatContainer>
  );
};

export default ChatBox;
