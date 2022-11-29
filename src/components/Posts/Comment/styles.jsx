import styled from "styled-components";
import { FlexCenterBox } from "../../../shared/Styles/flex";

export const FreeComment = styled.div`
  width: 100%;
  padding: 1.3rem 0;
  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
  background-color: ${(props) => props.theme.color.extraLightGray};
`;

export const CommentHeader = styled.div`
  width: 100%;
  padding: 0 2rem;
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
`;

export const CommentUserImg = styled.div`
  & > img {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    opacity: 0.7;
  }
`;

export const Nickname = styled.span`
  margin-left: 0.6rem;
  line-height: 37px;
  letter-spacing: -0.3px;
  font-size: 16px;
  font-weight: 600;
`;

export const CommentMeunu = styled.div`
  line-height: 40px;
  position: relative;
  cursor: pointer;
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
  margin-top: 0.8rem;
  padding: 0 2rem;
  font-size: 0.95rem;
  line-height: 1.4;
`;

export const CommentResponse = styled.div`
  margin-top: 1.4rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
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
