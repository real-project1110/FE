import styled from "styled-components";
import { FlexCenterBox } from "../../../shared/Styles/flex";

export const FreeComment = styled.div`
  width: 100%;
  padding: 0.8rem 1rem;
  display: grid;
  grid-template-columns: 40px 1fr;
  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
  //background-color: ${(props) => (props.detailMode ? "#ffffff" : "#f2f4f6")};
  background-color: #fcfcfc;
`;

export const CommentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
`;

export const CommentMenu = styled.div`
  ${FlexCenterBox};
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }
`;

export const CommentUserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentUserImg = styled.div`
  width: 100%;
  padding-top: 0.5px;
  display: flex;
  & > img {
    width: 28px;
    height: 28px;
    border: none;
    border-radius: 50%;
    opacity: 0.7;
  }
`;

export const CommentContainer = styled.div``;

export const Nickname = styled.span`
  letter-spacing: -0.3px;
  font-size: 14px;
  font-weight: 600;
`;

export const MenuList = styled.ul`
  width: 100px;
  line-height: 35px;
  text-align: center;
  & > li {
    border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
    &:hover {
      background-color: ${(props) => props.theme.color.extraLightGray};
    }
  }
`;

export const CommentContent = styled.p`
  width: 100%;
  margin-top: 4px;
  font-size: 0.95rem;
  line-height: 1.4;
`;

export const CommentResponse = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const CommentLoadTime = styled.span`
  letter-spacing: -0.3px;
  font-size: 12px;
  font-weight: 400;
`;

export const CommentLike = styled.span`
  margin: -2px 5% 0px 2%;
  cursor: pointer;
`;

export const CommentLikeCount = styled.span`
  margin-left: 5px;
  margin-top: 2px;
  position: absolute;
  font-weight: 300;
  font-size: 12px;
  color: #1c1c1c;
`;

export const CommentForm = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 1.3rem;
  padding: 0.3rem 0.5rem;
  border: 1px solid ${(props) => props.theme.color.lightGray};
  border-radius: 30px;
`;
