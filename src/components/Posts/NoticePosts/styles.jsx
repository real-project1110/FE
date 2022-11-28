import styled from "styled-components";
import { FlexAlignBox, FlexColumnBox } from "../../../shared/Styles/flex";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  max-height: ${(props) => props.theme.bodyHeight.normal};
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  margin-top: 1.5%;
  font-weight: 700;
  font-size: 14px;
`;

export const NoticeTitle = styled.div`
  height: 46px;
  border-bottom: 1px solid #e7e7e7;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: -5.5%;
  line-height: 46px;
`;

export const Notice = styled(NoticeTitle)`
  padding: 0 5%;
`;

export const AllPost = styled.div`
  width: 100%;
  height: 100%;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export const Post = styled.div`
  ${FlexAlignBox};
  width: 90%;
  height: 127px;
  margin: 0 auto;
  margin-top: 1.3rem;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 80;
`;

export const PostImg = styled.img`
  width: 110px;
  height: 110px;
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
  margin-top: 7px;
  display: flex;
  justify-content: space-between;
`;

export const PostInfo = styled.div`
  display: flex;
  width: 100%;
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
  margin-right: 1rem;
  svg {
    width: 1rem;
  }
`;

export const LikeCount = styled.span`
  margin-left: 5px;
  font-weight: 300;
  font-size: 12px;
  color: ${(props) => props.theme.color.gray};
`;
