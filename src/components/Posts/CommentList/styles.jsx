import { motion } from "framer-motion";
import styled from "styled-components";
import { FlexCenterBox, FlexColumnBox } from "../../../shared/Styles/flex";

export const List = styled(motion.div)`
  ${FlexColumnBox};
  background-color: white;
  border-radius: 0px 0px 8px 8px;
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
  margin-top: -5px;
  margin-right: 25px;
  width: 3rem;
  display: flex;
  border: none;
  border-radius: 5px;
  svg {
    width: 20px;
    margin-left: 0.5rem;
  }
`;

export const CommentSubmit = styled.button`
  ${FlexCenterBox};
  margin-right: 15px;
  width: 3rem;
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

export const More = styled.div`
  padding-top: 13px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;
