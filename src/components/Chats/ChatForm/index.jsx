import React from "react";
import styled from "styled-components";

const ChatForm = () => {
  return (
    <Wrapper>
      <FormContainer></FormContainer>
    </Wrapper>
  );
};

export default ChatForm;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.white};
  padding: 0.8rem 1rem 1.6rem 1rem;
`;

export const FormContainer = styled.div`
  min-height: 8rem;
  background-color: ${(props) => props.theme.boardColor.yellowGray};
`;
