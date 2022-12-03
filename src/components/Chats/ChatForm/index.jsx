import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import ASvg from "../../../assets/svg/ASvg";
import BoldSvg from "../../../assets/svg/BoldSvg";
import CommentPostSvg from "../../../assets/svg/CommentPostSvg";
import EmojiSvg from "../../../assets/svg/EmojiSvg";
import FileSvg from "../../../assets/svg/FileSvg";
import ItalicSvg from "../../../assets/svg/ItalicSvg";
import useSocket from "../../../hooks/useSocket";
import { FlexBetweenBox, FlexCenterBox } from "../../../shared/Styles/flex";
import autosize from "autosize";
import { useMutation } from "react-query";
import { addChat } from "../../../apis/chatApis";

const ChatForm = ({ groupUserId, roomId, groupId, scrollRef }) => {
  const [socket] = useSocket(groupId);
  const textareaRef = useRef(null);
  const { mutate: addChatFn } = useMutation(addChat, {
    onSuccess: () => {
      scrollRef.current?.scrollToBottom();
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
      delete payload.createdAt;

      addChatFn({ roomId, body: { groupUserId, message: payload.message } });
    },

    [groupUserId, roomId, textareaRef, socket, addChatFn]
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
        <TextArea onKeyPress={onKeydownChat} ref={textareaRef} />
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

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.boardColor.yellowGray};

  padding: 0.8rem 1rem 1.6rem 1rem;
`;

export const FormContainer = styled.form`
  display: grid;
  grid-template-rows: 1fr 2.5rem;
  width: 100%;
  min-height: 5.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.white};
  border: 1px solid ${(props) => props.theme.color.lightGray};
`;
export const TextArea = styled.textarea`
  padding: 10px;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 8px;
  resize: none !important;
  outline: none !important;
`;
export const ButtonContainer = styled.div`
  ${FlexBetweenBox};
  padding: 0 10px;
`;
export const Buttons = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;

  span {
    width: 1px;
    height: 15px;
    margin-right: 7px;
    border-left: 1px solid ${(props) => props.theme.color.gray};
  }
  svg {
    margin-right: 8px;
  }
`;
export const Button = styled.button`
  ${FlexCenterBox};
  min-width: 6rem;
  background-color: ${(props) => props.theme.color.green};
  padding: 5px 8px;
  font-size: 1rem;
  border-radius: 5px;
  color: white;
  svg {
    margin-left: 7px;
  }
  &:hover {
    background-color: ${(props) => props.theme.color.hoverGreen};
  }
`;
