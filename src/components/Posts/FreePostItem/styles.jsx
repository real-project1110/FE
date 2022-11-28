import styled from "styled-components";
import { FlexCenterBox, FlexColumnBox } from "../../../shared/Styles/flex";

export const CloseContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const FreePostItemContainer = styled.div`
  ${FlexColumnBox};
`;

export const FreePost = styled.div`
  width: 100%;
  height: auto;
  padding: 1.3rem 2rem;
  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const PostMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostUserInfo = styled.div`
  width: 100%;
  display: flex;
`;

export const UserImg = styled.div`
  & > img {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    opacity: 0.7;
  }
`;

export const Nickname = styled.div`
  margin-left: 0.6rem;
  line-height: 37px;
  letter-spacing: -0.3px;
  font-size: 16px;
  font-weight: 600;
`;

export const LoadTime = styled.div`
  margin-left: 0.4rem;
  line-height: 37px;
  letter-spacing: -0.3px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;

export const PostOption = styled.div`
  ${FlexCenterBox};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }
`;

export const MenuList = styled.ul`
  width: 10rem;
  & > li {
    padding: 0.8rem;
    border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
    &:hover {
      background-color: ${(props) => props.theme.color.extraLightGray};
    }
  }
`;

export const PostContent = styled.div`
  width: 100%;
  height: auto;
  margin: 1.5% auto auto auto;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 1.4;
`;

export const FakeImg = styled.div`
  width: 36px;
  height: 36px;
  background-color: ${(props) => props.theme.color.extraLightGray};
  border-radius: 50%;
`;

export const Content = styled.div``;

export const ImageWrap = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  & > img {
    width: 70px;
    height: 70px;
    margin-right: 0.8rem;
    border-radius: 8px;
  }
`;

export const PostImgWrap = styled.div`
  display: flex;
`;

export const PostResponse = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const PostComment = styled.div`
  margin-top: -1.2px;
  margin-left: 5%;
  cursor: pointer;
`;

export const CommentList = styled.div`
  ${FlexColumnBox};
  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
`;

export const CommentCount = styled.span`
  margin-left: 5px;
  margin-top: 3px;
  position: absolute;
  font-weight: 300;
  font-size: 12px;
  color: #1c1c1c;
`;

export const PostLike = styled.span`
  margin-right: 15px;
  cursor: pointer;
`;

export const PostLikeCount = styled.span`
  margin-left: 5px;
  margin-top: 2px;
  position: absolute;
  font-weight: 300;
  font-size: 12px;
  color: #1c1c1c;
`;

export const CommentForm = styled.form`
  display: flex;
  align-items: center;
  margin: 1rem 1.3rem;
  padding: 0.3rem 0.5rem;
  border: 1px solid ${(props) => props.theme.color.lightGray};
  border-radius: 30px;
`;

export const CommentUserImg = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  object-fit: cover;
  background-color: ${(props) => props.theme.color.lightGray};
  border: none;
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
