import styled from "styled-components";
import { FlexAlignBox, FlexColumnBox } from "../../../shared/Styles/flex";

export const Post = styled.div`
  ${FlexAlignBox};
  width: 94%;
  height: 127px;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 15px;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 80;
  cursor: pointer;
`;

export const TitleWrap = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -10px;
  display: flex;
`;

export const PostImg = styled.img`
  min-width: 100px;
  max-width: 100px;
  height: 100px;
  object-fit: cover;
  border: none;
  border-radius: 8px;
`;

export const ContentBox = styled.div`
  ${FlexColumnBox};
  width: 100%;
  height: 100%;
  padding: 0.2rem 0;
  margin-left: 3%;
`;

export const PostTitle = styled.h3`
  font-weight: 700;
  font-size: 0.9rem;
`;

export const PostContent = styled.p`
  width: 100%;
  margin-top: 8px;
  min-height: 60%;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color.gray};
  display: -webkit-box;
  display: -ms-flexbox;
  display: box;
  max-height: 80px;
  overflow: hidden;
  vertical-align: top;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export const PostInfoWrap = styled.div`
  width: 100%;
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
`;

export const PostInfo = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5px;
`;

export const PostWriter = styled.span`
  font-weight: 300;
  font-size: 12px;
  color: ${(props) => props.theme.color.gray};
`;

export const Vector = styled.span`
  margin: 0 1rem;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  color: ${(props) => props.theme.color.gray};
`;
export const PostDate = styled.span`
  width: 64.41px;
  height: 12px;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  color: ${(props) => props.theme.color.gray};
`;
export const PostLike = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 0.5rem;
  svg {
    width: 1rem;
  }
`;

export const LikeCount = styled.span`
  margin-left: 5px;
  margin-top: 1px;
  font-weight: 300;
  font-size: 12px;
  color: ${(props) => props.theme.color.gray};
`;
