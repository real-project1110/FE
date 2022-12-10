import { motion } from "framer-motion";
import styled from "styled-components";
import {
  FlexAlignBox,
  FlexCenterBox,
  FlexColumnBox,
} from "../../../shared/Styles/flex";

export const CloseContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const FreePostItemContainer = styled.div`
  ${FlexColumnBox};
  margin-bottom: 11px;
`;

export const FreePost = styled(motion.div)`
  width: 100%;
  height: auto;
  min-height: 140px;
  padding: 1rem;
  background-color: white;
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

export const PostUserDetail = styled.div`
  ${FlexColumnBox};
  justify-content: center;
  margin-left: 0.5rem;
`;

export const UserImg = styled.div`
  & > img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border: none;
    border-radius: 50%;
  }
`;

export const Nickname = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export const LoadTime = styled.div`
  margin-top: 5px;
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
  cursor: pointer;
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
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const PostImgWrap = styled.div`
  display: flex;
`;

export const PostResponse = styled.div`
  margin-top: 20px;
  ${FlexAlignBox};
`;

export const PostComment = styled.div`
  ${FlexAlignBox};
  margin-left: 1.6rem;
  cursor: pointer;
`;

export const CommentCount = styled.span`
  margin-left: 5px;
  font-weight: 300;
  font-size: 12px;
  color: #1c1c1c;
`;

export const PostLike = styled.span`
  cursor: pointer;
  ${FlexAlignBox};
`;

export const PostLikeCount = styled.span`
  margin-left: 5px;
  font-weight: 300;
  font-size: 12px;
  color: #1c1c1c;
`;

export const SpreadBtn = styled.div`
  ${FlexCenterBox};
  border: 1px solid #e7e7e7;
  border-radius: 3px;
  width: 16px;
  height: 16px;
  margin-left: 1.4rem;
  cursor: pointer;
  &:hover {
    border-color: #c4c4c4;
    svg {
      color: rgba(0, 0, 0, 0.5);
    }
  }
  svg {
    width: 10px;
    color: rgba(0, 0, 0, 0.3);
    transform: ${(props) =>
      props.isSpread ? "rotateZ(180deg)" : "rotateZ(360deg)"};
  }
`;
