import React, { useCallback, useEffect, useRef } from "react";
import ASvg from "../../../assets/svg/ASvg";
import BoldSvg from "../../../assets/svg/BoldSvg";
import CommentPostSvg from "../../../assets/svg/CommentPostSvg";
import EmojiSvg from "../../../assets/svg/EmojiSvg";
import FileSvg from "../../../assets/svg/FileSvg";
import ItalicSvg from "../../../assets/svg/ItalicSvg";
import useSocket from "../../../hooks/useSocket";
import autosize from "autosize";
import { useMutation } from "react-query";
import { addChat } from "../../../apis/chatApis";
import {
  Button,
  ButtonContainer,
  Buttons,
  FormContainer,
  TextArea,
  Wrapper,
} from "./styles";

const ChatForm = ({
  setChats,
  groupUserId,
  roomId,
  groupId,
  otherUserId,
  scrollRef,
}) => {
  const [socket] = useSocket(groupId);
  const textareaRef = useRef(null);
  const { mutate: addChatFn } = useMutation(addChat, {
    onSuccess: () => {
      scrollRef?.current?.scrollToBottom();
    },
    onError: () => scrollRef.current?.scrollToBottom(),
  });
  // 채팅 보내기
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const payload = {
        roomId,
        groupUserId,
        message: textareaRef.current.value,
        createdAt: new Date().toISOString(),
      };
      socket.emit("message", payload);
      textareaRef.current.value = "";
      textareaRef.current.style.height = "50px";
      localStorage.setItem(
        `${groupId}-${groupUserId}-${otherUserId}`,
        new Date().getTime().toString()
        //new Date()
      );
      setChats((prev) => [payload, ...prev]);
      scrollRef.current?.scrollToBottom();
      addChatFn({ roomId, body: { groupUserId, message: payload.message } });
    },

    [
      groupUserId,
      roomId,
      textareaRef,
      socket,
      addChatFn,
      groupId,
      otherUserId,
      setChats,
      scrollRef,
    ]
  );

  const onKeydownChat = useCallback(
    (e) => {
      if (e.key === "Enter") {
        if (!e.shiftKey) {
          e.preventDefault();
          if (textareaRef.current?.value?.length > 0) onSubmit(e);
        }
      }
    },
    [onSubmit]
  );

  useEffect(() => {
    if (textareaRef.current) {
      autosize(textareaRef.current);
    }
  }, [textareaRef]);

  return (
    <Wrapper>
      <FormContainer onSubmit={onSubmit}>
        <TextArea onKeyPress={onKeydownChat} ref={textareaRef} required />
        <ButtonContainer>
          <Buttons>
            <BoldSvg />
            <ItalicSvg />
            <ASvg />
            <span />
            <FileSvg />
            <EmojiSvg />
          </Buttons>
          <Button>
            보내기 <CommentPostSvg _width={18} />
          </Button>
        </ButtonContainer>
      </FormContainer>
    </Wrapper>
  );
};

export default ChatForm;
