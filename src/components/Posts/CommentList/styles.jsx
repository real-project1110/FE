import styled from "styled-components";
import { FlexCenterBox, FlexColumnBox } from "../../../shared/Styles/flex";

export const List = styled.div`
  ${FlexColumnBox};
  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
`;

export const CommentForm = styled.form`
  display: flex;
  align-items: center;
  margin: 1rem 1.3rem;
  padding: 0.3rem 0.5rem;
  border: 1px solid ${(props) => props.theme.color.lightGray};
  border-radius: 30px;
`;

export const CommentFormUserImg = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  background-color: ${(props) => props.theme.color.lightGray};
  border-radius: 50%;
`;

export const CommentInput = styled.input`
  width: 100%;
  border: none;
  margin-left: 1rem;
  font-size: 0.9rem;
`;

export const CommentSubmitBtn = styled.button`
  ${FlexCenterBox};
  padding: 0.5rem 0;
  width: 7rem;
  display: flex;
  border: none;
  border-radius: 5px;
  svg {
    width: 20px;
    margin-left: 0.5rem;
  }
`;

export const SendComment = styled.span`
  font-weight: 400;
  font-size: 0.9rem;
`;
